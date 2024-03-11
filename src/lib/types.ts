import moment from 'moment'

export interface Invitation {
  id: string
  cal: Calendar
  meeting: Meeting
  from: UserSelf
}

/**
 * Time slot preference
 */
export enum Preference {
  high = 3,
  medium = 2,
  low = 1,
}

export const PREFERENCE_STR = {
  3: 'High',
  2: 'Medium',
  1: 'Low',
}

/**
 * Contact information
 */
export interface Contact {
  id: number
  name: string
  email: string
  pfp: string
}

/**
 * Meeting request
 */
export interface Meeting {
  id: number

  title: string
  description: string
  is_virtual?: boolean
  location?: string

  created_at?: string // ISO time
  updated_at?: string // ISO time

  calendarId: number
  creator: UserSelf
  invitee: Contact

  duration: number // minutes
  regularity: 'once' | 'weekly'

  // A meeting would be pending response if time is not set
  time?: string // ISO time
}

export type MeetingStatus = 'invited' | 'scheduled' | 'in-progress' | 'complete'

/**
 * A time slot indicating availability on a calendar
 */
export interface TimeSlot {
  start: string // ISO time
  end: string // ISO time
  preference: Preference
}

/**
 * A calendar for a period of time
 */
export interface Calendar extends NewCalendar {
  id: number
  meetings: Meeting[]

  // Metadata
  created: string // ISO time
  modified: string // ISO time
  time_slots: TimeSlot[]
}

export interface NewCalendar {
  start_date: string // YYYY-MM-DD
  end_date: string // YYYY-MM-DD
  timezone: string
}

/**
 * Information of the current logged-in user
 */
export interface UserSelf {
  id: number
  name: string
  email: string
  profile_image?: string
  password: string
}