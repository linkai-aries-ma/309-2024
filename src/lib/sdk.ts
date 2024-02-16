import { EX_CALENDARS, EX_CONTACTS, EX_MEETINGS, EX_SELF } from './examples.ts'
import { Calendar, Contact, Invitation, Meeting, UserSelf } from './types.ts'

/**
 * Get the contact list of the current logged-in user
 *
 * @returns Contact list
 */
export async function getContacts(): Promise<Contact[]> {
  // TODO: Fetch contacts from server
  await new Promise(resolve => setTimeout(resolve, 1000))
  return EX_CONTACTS
}

/**
 * Get the scheduled meetings of the current logged-in user
 *
 * @returns Scheduled meetings
 */
export async function getScheduledMeetings(): Promise<Meeting[]> {
  // TODO: Fetch scheduled meetings from server
  await new Promise(resolve => setTimeout(resolve, 1000))
  return EX_MEETINGS
}

/**
 * Get the calendars of the current logged-in user
 *
 * @returns Calendars
 */
export async function getCalendars(): Promise<Calendar[]> {
  // TODO: Fetch calendars from server
  await new Promise(resolve => setTimeout(resolve, 1000))
  return EX_CALENDARS
}

/**
 * Get the information of the current logged-in user
 *
 * @returns User information
 */
export async function getUserSelf(): Promise<UserSelf> {
  // TODO: Fetch user information from server
  await new Promise(resolve => setTimeout(resolve, 1000))
  return EX_SELF
}

/**
 * Get the invitation information by its UUID
 *
 * @param uuid UUID of the invitation
 */
export async function getInvitation(uuid: string): Promise<Invitation> {
  // TODO: Fetch invitation from server
  await new Promise(resolve => setTimeout(resolve, 1000))
  return {
    id: uuid,
    cal: EX_CALENDARS[0],
    meeting: {
      id: 10,
      calendarId: 1,
      with: EX_CONTACTS[2],
      title: 'Cat Meeting',
      description: 'We should let our cats meet to see if they get along together.',
      durationMinutes: 60,
      regularity: 'once',
    },
    from: EX_SELF,
  }
}