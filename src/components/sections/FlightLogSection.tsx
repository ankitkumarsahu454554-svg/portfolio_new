'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FLIGHT_LOG_EVENTS,
  FlightLogEvent,
  EventType,
} from '@/data/events';
import { FlightLogModal } from './FlightLogModal';
import {
  Trophy,
  Filter,
  Calendar,
  MapPin,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Search,
  Radio,
} from 'lucide-react';

const FILTER_TYPES: Array<EventType | 'All'> = [
  'All',
  'Competition',
  'Training',
  'Hackathon',
  'Workshop',
  'Conference',
];

export function FlightLogSection() {
  const [selectedType, setSelectedType] = useState<EventType | 'All'>('All');
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalEvent, setActiveModalEvent] = useState<FlightLogEvent | null>(null);

  // Available years derived dynamically
  const availableYears = useMemo(() => {
    const years = Array.from(new Set(FLIGHT_LOG_EVENTS.map((e) => e.year))).sort(
      (a, b) => b - a
    );
    return ['All', ...years.map(String)];
  }, []);

  // Filtered events
  const filteredEvents = useMemo(() => {
    return FLIGHT_LOG_EVENTS.filter((event) => {
      const matchesType = selectedType === 'All' || event.type === selectedType;
      const matchesYear =
        selectedYear === 'All' || String(event.year) === selectedYear;
      const matchesSearch =
        !searchQuery.trim() ||
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.organizer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesType && matchesYear && matchesSearch;
    });
  }, [selectedType, selectedYear, searchQuery]);

  // Featured events
  const featuredEvents = useMemo(() => {
    return FLIGHT_LOG_EVENTS.filter((e) => e.featured);
  }, []);

  return (
    <section id="flight-log" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-mc-cyan/30 bg-mc-cyan/5 text-mc-cyan font-mono text-xs uppercase tracking-wider mb-4">
            <Radio className="w-3.5 h-3.5 animate-pulse text-mc-cyan" />
            <span>Mission Telemetry & Achievements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-mc-text-primary">
            The <span className="font-serif italic font-normal text-mc-cyan">Flight Log</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-mc-text-secondary max-w-2xl">
            A chronological record of competitions, engineering workshops, technical certifications,
            and research milestoning.
          </p>
        </div>

        {/* Counter readout */}
        <div className="flex items-center gap-4 bg-mc-surface/80 border border-mc-border/80 px-4 py-2.5 rounded-xl font-mono text-xs text-mc-text-secondary self-start md:self-auto">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-mc-cyan animate-ping" />
            <span className="text-mc-cyan font-bold">{filteredEvents.length}</span>
            <span>/ {FLIGHT_LOG_EVENTS.length} RECORDED</span>
          </div>
        </div>
      </div>

      {/* Featured Strip (if available) */}
      {featuredEvents.length > 0 && selectedType === 'All' && selectedYear === 'All' && !searchQuery && (
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-wider text-mc-amber">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Highlights</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredEvents.map((event) => (
              <motion.div
                key={`featured-${event.id}`}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                onClick={() => setActiveModalEvent(event)}
                className="group relative cursor-pointer p-6 rounded-2xl border border-mc-cyan/30 bg-gradient-to-br from-mc-cyan/5 via-mc-surface to-mc-surface hover:border-mc-cyan/60 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-mc-cyan/10"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-mc-cyan/10 rounded-full blur-2xl pointer-events-none group-hover:bg-mc-cyan/20 transition-colors" />

                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border border-mc-amber/40 bg-mc-amber/10 text-mc-amber">
                    <Trophy className="w-3 h-3" />
                    {event.myRole}
                  </span>
                  <span className="font-mono text-xs text-mc-text-muted">{event.date}</span>
                </div>

                <h3 className="text-xl font-display font-bold text-mc-text-primary group-hover:text-mc-cyan transition-colors mb-2">
                  {event.title}
                </h3>
                <p className="text-sm font-mono text-mc-cyan mb-3">{event.organizer}</p>
                <p className="text-sm text-mc-text-secondary line-clamp-2 mb-4">
                  {event.summary}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-mc-border/50">
                  <div className="flex items-center gap-2 font-mono text-xs text-mc-text-muted">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{event.location}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-mc-cyan group-hover:translate-x-1 transition-transform">
                    Inspect Telemetry <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="mb-10 p-4 rounded-2xl bg-mc-surface/90 border border-mc-border/80 backdrop-blur-md flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        {/* Type pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
          <Filter className="w-4 h-4 text-mc-text-muted mr-1.5 shrink-0" />
          {FILTER_TYPES.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                selectedType === type
                  ? 'bg-mc-cyan text-black font-bold shadow-md shadow-mc-cyan/20'
                  : 'text-mc-text-secondary hover:text-mc-text-primary hover:bg-mc-surface-raised'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Year filter + Search input */}
        <div className="flex items-center gap-3">
          {/* Year selector */}
          <div className="flex items-center gap-1 bg-mc-surface-raised border border-mc-border/60 rounded-xl px-2.5 py-1">
            <span className="font-mono text-xs text-mc-text-muted">YR:</span>
            {availableYears.map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`px-2 py-0.5 rounded text-xs font-mono transition-colors ${
                  selectedYear === yr
                    ? 'bg-mc-cyan/20 text-mc-cyan font-bold'
                    : 'text-mc-text-muted hover:text-mc-text-primary'
                }`}
              >
                {yr}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative min-w-[180px] sm:min-w-[220px]">
            <Search className="w-3.5 h-3.5 text-mc-text-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by keyword..."
              className="w-full pl-9 pr-3 py-1.5 bg-mc-surface-raised border border-mc-border/60 rounded-xl text-xs font-mono text-mc-text-primary placeholder-mc-text-muted/60 focus:outline-none focus:border-mc-cyan transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Main Events Grid / Timeline */}
      {filteredEvents.length === 0 ? (
        <div className="text-center py-16 border border-dashed border-mc-border rounded-2xl">
          <p className="font-mono text-sm text-mc-text-muted">
            NO TELEMETRY RECORD MATCHING ACTIVE CRITERIA
          </p>
          <button
            onClick={() => {
              setSelectedType('All');
              setSelectedYear('All');
              setSearchQuery('');
            }}
            className="mt-4 px-4 py-2 text-xs font-mono text-mc-cyan hover:underline"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event) => (
              <motion.article
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                key={event.id}
                onClick={() => setActiveModalEvent(event)}
                className="group relative cursor-pointer flex flex-col justify-between p-5 rounded-2xl border border-mc-border/80 bg-mc-surface/70 hover:bg-mc-surface-raised hover:border-mc-cyan/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-mc-cyan/5"
              >
                <div>
                  {/* Card top badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border ${
                        event.myRole === 'Finalist' || event.myRole === 'Winner'
                          ? 'border-mc-amber/40 bg-mc-amber/10 text-mc-amber'
                          : 'border-mc-cyan/30 bg-mc-cyan/5 text-mc-cyan'
                      }`}
                    >
                      {event.myRole === 'Finalist' && <Trophy className="w-3 h-3" />}
                      {event.myRole}
                    </span>

                    <span className="font-mono text-xs text-mc-text-muted flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {event.date}
                    </span>
                  </div>

                  {/* Title & Organizer */}
                  <h3 className="text-lg font-display font-bold text-mc-text-primary group-hover:text-mc-cyan transition-colors mb-1.5 leading-snug">
                    {event.title}
                  </h3>
                  <div className="text-xs font-mono text-mc-cyan/90 mb-3 flex items-center gap-1.5">
                    <span>{event.organizer}</span>
                    <span className="text-mc-border">•</span>
                    <span className="text-mc-text-muted">{event.location}</span>
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-mc-text-secondary leading-relaxed line-clamp-3 mb-4">
                    {event.summary}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {event.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-mc-surface border border-mc-border/60 text-[10px] font-mono text-mc-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                    {event.tags.length > 3 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono text-mc-text-muted">
                        +{event.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Card footer CTA */}
                  <div className="flex items-center justify-between pt-3 border-t border-mc-border/50 text-xs font-mono">
                    <span className="text-mc-text-muted">
                      {event.type.toUpperCase()}
                    </span>
                    <span className="inline-flex items-center gap-1 text-mc-cyan group-hover:translate-x-1 transition-transform font-semibold">
                      Inspect <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Developer log note if marked placeholder */}
                {event.isPlaceholder && (
                  <div className="mt-2 text-[10px] font-mono text-mc-amber/70 border-t border-mc-border/30 pt-1">
                    [DATA EDITABLE IN /data/events.ts]
                  </div>
                )}
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Flight Log Detail Modal */}
      <FlightLogModal
        event={activeModalEvent}
        onClose={() => setActiveModalEvent(null)}
      />
    </section>
  );
}
