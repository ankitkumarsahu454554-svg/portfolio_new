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
    <section id="flight-log" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Violet/Pink Background Glow */}
      <div className="pointer-events-none absolute top-10 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#8B5CF6]/15 via-[#FF3D81]/15 to-transparent rounded-full blur-3xl -z-10" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 text-[#8B5CF6] font-mono text-xs uppercase tracking-wider mb-4 font-bold">
            <Radio className="w-3.5 h-3.5 animate-pulse text-[#FF3D81]" />
            <span>Mission Milestones & Competitions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-mc-text">
            The <span className="font-serif italic font-normal text-[#FF3D81]">Flight Log</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-mc-text-secondary max-w-2xl leading-relaxed">
            A chronological telemetry record of developer hackathons, engineering certifications, aerospace training,
            and research benchmarks.
          </p>
        </div>

        {/* Counter readout */}
        <div className="flex items-center gap-4 bg-white dark:bg-mc-surface border border-mc-border px-4 py-2.5 rounded-2xl font-mono text-xs text-mc-text-secondary self-start md:self-auto shadow-sm">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF3D81] animate-ping" />
            <span className="text-[#8B5CF6] font-bold">{filteredEvents.length}</span>
            <span>/ {FLIGHT_LOG_EVENTS.length} RECORDED</span>
          </div>
        </div>
      </div>

      {/* Featured Strip in Violet/Pink */}
      {featuredEvents.length > 0 && selectedType === 'All' && selectedYear === 'All' && !searchQuery && (
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-wider text-[#FF3D81] font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#FF3D81]" />
            <span>Featured National Recognition</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featuredEvents.map((event) => (
              <motion.div
                key={`featured-${event.id}`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => setActiveModalEvent(event)}
                className="group relative cursor-pointer p-6 sm:p-7 rounded-3xl border border-[#8B5CF6]/30 bg-gradient-to-br from-white via-white to-[#8B5CF6]/10 dark:from-mc-surface dark:via-mc-surface dark:to-[#8B5CF6]/15 hover:border-[#FF3D81] transition-all duration-300 overflow-hidden shadow-[0_12px_32px_-8px_rgba(139,92,246,0.2)]"
              >
                <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#FF3D81]/15 to-[#8B5CF6]/15 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform" />

                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold border border-[#FF3D81]/40 bg-[#FF3D81]/10 text-[#FF3D81] shadow-xs">
                    <Trophy className="w-3.5 h-3.5" />
                    {event.myRole}
                  </span>
                  <span className="font-mono text-xs text-mc-text-muted font-medium">{event.date}</span>
                </div>

                <h3 className="text-xl font-heading font-bold text-mc-text group-hover:text-[#8B5CF6] transition-colors mb-2">
                  {event.title}
                </h3>
                <p className="text-xs font-mono text-[#8B5CF6] font-semibold mb-3">{event.organizer}</p>
                <p className="text-sm text-mc-text-secondary line-clamp-2 mb-4 leading-relaxed">
                  {event.summary}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-mc-border/60">
                  <div className="flex items-center gap-1.5 font-mono text-xs text-mc-text-muted">
                    <MapPin className="w-3.5 h-3.5 text-[#FF3D81]" />
                    <span>{event.location}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#8B5CF6] group-hover:text-[#FF3D81] group-hover:translate-x-1 transition-all">
                    Inspect Telemetry <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="mb-10 p-3 sm:p-4 rounded-2xl bg-white dark:bg-mc-surface border border-mc-border backdrop-blur-md flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 shadow-sm">
        {/* Type pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
          <Filter className="w-4 h-4 text-mc-text-muted mr-1 shrink-0" />
          {FILTER_TYPES.map((type) => {
            const isActive = selectedType === type;
            return (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#8B5CF6] to-[#FF3D81] text-white shadow-md'
                    : 'text-mc-text-secondary hover:text-mc-text hover:bg-mc-surface-elevated'
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>

        {/* Year filter + Search input */}
        <div className="flex items-center gap-3">
          {/* Year selector */}
          <div className="flex items-center gap-1 bg-mc-surface-elevated border border-mc-border rounded-full px-3 py-1">
            <span className="font-mono text-xs text-mc-text-muted font-bold">YR:</span>
            {availableYears.map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`px-2 py-0.5 rounded-full text-xs font-mono font-semibold transition-colors cursor-pointer ${
                  selectedYear === yr
                    ? 'bg-[#8B5CF6]/20 text-[#8B5CF6]'
                    : 'text-mc-text-muted hover:text-mc-text'
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
              placeholder="Search milestones..."
              className="w-full pl-9 pr-3 py-1.5 bg-mc-surface-elevated border border-mc-border rounded-full text-xs font-mono text-mc-text placeholder-mc-text-muted focus:outline-none focus:border-[#8B5CF6] transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Main Events Grid */}
      {filteredEvents.length === 0 ? (
        <div className="text-center py-16 border border-dashed border-mc-border rounded-2xl bg-white dark:bg-mc-surface">
          <p className="font-mono text-sm text-mc-text-muted">
            NO TELEMETRY RECORD MATCHING ACTIVE CRITERIA
          </p>
          <button
            onClick={() => {
              setSelectedType('All');
              setSelectedYear('All');
              setSearchQuery('');
            }}
            className="mt-4 px-4 py-2 text-xs font-mono text-[#8B5CF6] font-bold hover:underline"
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
                className="group relative cursor-pointer flex flex-col justify-between p-6 rounded-3xl border border-mc-border bg-white dark:bg-mc-surface shadow-[0_10px_25px_-6px_rgba(139,92,246,0.12)] hover:border-[#8B5CF6] hover:shadow-[0_18px_36px_-8px_rgba(139,92,246,0.28)] transition-all duration-300"
              >
                <div>
                  {/* Card top badges in violet/pink */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border ${
                        event.myRole === 'Finalist' || event.myRole === 'Winner'
                          ? 'border-[#FF3D81]/40 bg-[#FF3D81]/10 text-[#FF3D81]'
                          : 'border-[#8B5CF6]/30 bg-[#8B5CF6]/10 text-[#8B5CF6]'
                      }`}
                    >
                      {event.myRole === 'Finalist' && <Trophy className="w-3 h-3 text-[#FF3D81]" />}
                      {event.myRole}
                    </span>

                    <span className="font-mono text-xs text-mc-text-muted flex items-center gap-1 font-medium">
                      <Calendar className="w-3 h-3" />
                      {event.date}
                    </span>
                  </div>

                  {/* Title & Organizer */}
                  <h3 className="text-lg font-heading font-bold text-mc-text group-hover:text-[#8B5CF6] transition-colors mb-1.5 leading-snug">
                    {event.title}
                  </h3>
                  <div className="text-xs font-mono text-[#8B5CF6] mb-3 flex items-center gap-1.5 font-medium">
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
                        className="px-2 py-0.5 rounded-md bg-mc-surface-elevated border border-mc-border text-[10px] font-mono text-mc-text-muted"
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
                  <div className="flex items-center justify-between pt-3 border-t border-mc-border/60 text-xs font-mono">
                    <span className="text-mc-text-muted font-medium">
                      {event.type.toUpperCase()}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#8B5CF6] group-hover:text-[#FF3D81] group-hover:translate-x-1 transition-all font-bold">
                      Inspect <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Developer log note if marked placeholder */}
                {event.isPlaceholder && (
                  <div className="mt-3 py-1.5 px-2.5 rounded-xl bg-amber-500/10 border border-amber-500/40 text-[10px] font-mono text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse shrink-0" />
                    <span>[UNVERIFIED PLACEHOLDER // TODO: EDIT IN /src/data/events.ts]</span>
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
