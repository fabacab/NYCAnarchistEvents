/**
 * List of Full Calendar Event Sources.
 *
 * This file aggregates the full list of FullCalendar Event
 * Sources used in this calendar. Individual Event Sources
 * might need to be transformed in different ways so they are
 * given their own ECMAScript Module file where they are made
 * compatible, if necessary. Then they're all concatenated
 * into one big array, here.
 *
 * @TODO: Can we paralellize this in some way to make initial
 *        loading ("time to first (calendar) paint") faster?
 */
import { DiceEventSources } from './event-sources/dice.js';
import { EventBriteEventSources } from './event-sources/eventbrite.js';
import { GoDaddyCalendarWidgetSources } from './event-sources/godaddy-calendar.js';
import { GoogleCalendarEventSources } from './event-sources/google-calendar.js';
import { IcalendarEventSources } from './event-sources/icalendar.js';
import { JSONFeedEventSources } from './event-sources/fullcalendar-json-feed.js';
import { SquarespaceEventSources } from './event-sources/squarespace.js';
import { WithFriendsEventSources } from './event-sources/withfriends.js';
import { WordPressTribeEventsCalendarSources } from './event-sources/wordpress-tribe-events-calendar.js';

const EventSources = [].concat(
    DiceEventSources.map((i) => {
        i.color = '#E6D500';
        return i;
    }),
    EventBriteEventSources.map((i) => {
        i.color = 'red';
        return i;
    }),
    GoDaddyCalendarWidgetSources.map((i) => {
        i.color = '#14DCDC';
        return i;
    }),
    GoogleCalendarEventSources.map((i) => {
        i.color = 'gray';
        return i;
    }),
    IcalendarEventSources.map((i) => {
        i.color = (i.color) ? i.color : 'black';
        i.textColor = (i.textColor) ? i.textColor : 'white';
        return i;
    }),
    JSONFeedEventSources.map((i) => {
        return i;
    }),
    SquarespaceEventSources.map((i) => {
        i.color = 'white';
        i.textColor = 'black';
        return i;
    }),
    WithFriendsEventSources.map((i) => {
        i.color = '#ff877b';
        return i;
    }),
    WordPressTribeEventsCalendarSources.map((i) => {
        i.color = (i.color) ? i.color : 'blue';
        return i;
    })
);

export default EventSources;
