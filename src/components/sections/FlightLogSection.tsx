'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PUBLIC_FLIGHT_LOG_EVENTS,
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
  Clock,
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

  // Available years derived dynamically from publicly visible events
  const availableYears = useMemo(() => {
    const years = Array.from(new Set(PUBLIC_FLIGHT_LOG_EVENTS.map((e) => e.year))).sort(
      (a, b) => b - a
    );
    return ['All', ...years.map(String)];
  }, []);

  // Filtered public events
  const filteredEvents = useMemo(() => {
    return PUBLIC_FLIGHT_LOG_EVENTS.filter((event) => {
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
    return PUBLIC_FLIGHT_LOG_EVENTS.filter((e) => e.featured);
  }, []);

  // Show filter bar only when 4 or more published events exist
  const showFilters = PUBLIC_FLIGHT_LOG_EVENTS.length >= 4;

  return (
    <section id="flight-log" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Violet/Pink Background Glow */}
      <div className="pointer-events-none absolute top-10 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#8B5CF6]/15 via-[#FF3D81]/15 to-transparent rounded-full blur-3xl -z-10" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-700 dark:text-violet-400 font-mono text-xs uppercase tracking-wider mb-4 font-bold">
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

        {/* Counter readout showing true count */}
        <div className="flex items-center gap-4 bg-white dark:bg-mc-surface border border-mc-border px-4 py-2.5 rounded-2xl font-mono text-xs text-mc-text-secondary self-start md:self-auto shadow-sm">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF3D81] animate-ping" />
            <span className="text-violet-700 dark:text-violet-400 font-bold">{PUBLIC_FLIGHT_LOG_EVENTS.length}</span>
            <span className="font-medium">VERIFIED MILESTONE{PUBLIC_FLIGHT_LOG_EVENTS.length === 1 ? '' : 'S'}</span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar (Only shown when 4 or more published events exist) */}
      {showFilters && (
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
            <div className="flex items-center gap-1 bg-mc-surface-elevated border border-mc-border rounded-full px-3 py-1">
              <span className="font-mono text-xs text-mc-text-muted font-bold">YR:</span>
              {availableYears.map((yr) => (
                <button
                  key={yr}
                  onClick={() => setSelectedYear(yr)}
                  className={`px-2 py-0.5 rounded-full text-xs font-mono font-semibold transition-colors cursor-pointer ${
                    selectedYear === yr
                      ? 'bg-violet-500/20 text-violet-700 dark:text-violet-300'
                      : 'text-mc-text-muted hover:text-mc-text'
                  }`}
                >
                  {yr}
                </button>
              ))}
            </div>

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
      )}

      {/* Main Events Grid with Published Events and Polished Empty-State Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              className="group relative cursor-pointer flex flex-col justify-between p-6 sm:p-7 rounded-3xl border border-mc-border bg-white dark:bg-mc-surface shadow-[0_10px_25px_-6px_rgba(139,92,246,0.12)] hover:border-[#8B5CF6] hover:shadow-[0_18px_36px_-8px_rgba(139,92,246,0.28)] transition-all duration-300"
            >
              <div>
                {/* Card top badges */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-xs font-mono font-bold border border-pink-500/40 bg-pink-500/10 text-pink-700 dark:text-pink-400">
                    <Trophy className="w-3.5 h-3.5 text-[#FF3D81]" />
                    {event.myRole}
                  </span>

                  <span className="font-mono text-xs text-mc-text-muted flex items-center gap-1 font-medium">
                    <Calendar className="w-3 h-3" />
                    {event.date}
                  </span>
                </div>

                {/* Title & Organizer */}
                <h3 className="text-xl font-heading font-bold text-mc-text group-hover:text-violet-700 dark:group-hover:text-violet-400 transition-colors mb-2 leading-snug">
                  {event.title}
                </h3>
                <div className="text-xs font-mono text-violet-700 dark:text-violet-400 mb-3 flex items-center gap-1.5 font-semibold">
                  <span>{event.organizer}</span>
                  <span className="text-mc-border">•</span>
                  <span className="text-mc-text-muted font-normal">{event.location}</span>
                </div>

                {/* Summary */}
                <p className="text-sm text-mc-text-secondary leading-relaxed line-clamp-3 mb-5">
                  {event.summary}
                </p>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {event.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-lg bg-mc-surface-elevated border border-mc-border text-[11px] font-mono text-mc-text-secondary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card footer CTA */}
                <div className="flex items-center justify-between pt-3.5 border-t border-mc-border/60 text-xs font-mono">
                  <span className="text-mc-text-muted font-medium uppercase tracking-wider text-[11px]">
                    {event.type}
                  </span>
                  <span className="inline-flex items-center gap-1 text-violet-700 dark:text-violet-400 group-hover:text-[#FF3D81] group-hover:translate-x-1 transition-all font-bold">
                    Inspect Telemetry <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>

        {/* Polished, On-Brand Empty-State Card: "More milestones are on the way" */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative flex flex-col justify-center items-center p-8 rounded-3xl border-2 border-dashed border-mc-border bg-white/40 dark:bg-mc-surface/40 text-center min-h-[300px] hover:border-violet-500/50 transition-colors"
        >
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FF3D81]/15 to-[#8B5CF6]/15 border border-[#8B5CF6]/30 flex items-center justify-center text-violet-700 dark:text-violet-400 mb-4 shadow-sm">
            <Sparkles className="w-6 h-6 text-[#FF3D81]" />
          </div>

          <span className="font-mono text-[10px] uppercase tracking-wider text-violet-700 dark:text-violet-400 font-bold block mb-1">
            CONTINUOUS PROGRESS
          </span>

          <h4 className="font-heading text-lg font-bold text-mc-text">
            More milestones are on the way
          </h4>

          <p className="mt-2 font-sans text-xs text-mc-text-secondary max-w-xs leading-relaxed">
            Upcoming hackathon projects, research papers, and technical certifications will be published here as they are completed.
          </p>

          <div className="mt-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-mc-border bg-mc-surface-elevated font-mono text-[10px] text-mc-text-muted font-semibold">
            <Clock className="w-3 h-3 text-[#FF3D81]" />
            <span>Updated with new verified achievements</span>
          </div>
        </motion.div>
      </div>

      {/* Flight Log Detail Modal */}
      <FlightLogModal
        event={activeModalEvent}
        onClose={() => setActiveModalEvent(null)}
      />
    </section>
  );
}
