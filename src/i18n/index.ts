import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: "Welcome back, Nurse",
      overview: "Here's your daily overview",
      activePatients: "Active Patients",
      hoursThisWeek: "Hours This Week",
      upcomingShifts: "Upcoming Shifts",
      newNotifications: "New Notifications",
      recentPatients: "Recent Patients",
      room: "Room",
      stable: "Stable",
      underObservation: "Under Observation",
      generalWard: "General Ward",
      icu: "ICU",
      emergencyRoom: "Emergency Room",
      logout: "Logout",
      fromYesterday: "+2 from yesterday",
      hoursRemaining: "8 hours remaining",
      nextShift: "Next: Tomorrow 7AM",
      urgent: "2 urgent"
    }
  },
  de: {
    translation: {
      welcome: "Willkommen zurück, Krankenschwester",
      overview: "Hier ist Ihr täglicher Überblick",
      activePatients: "Aktive Patienten",
      hoursThisWeek: "Stunden diese Woche",
      upcomingShifts: "Kommende Schichten",
      newNotifications: "Neue Benachrichtigungen",
      recentPatients: "Aktuelle Patienten",
      room: "Zimmer",
      stable: "Stabil",
      underObservation: "Unter Beobachtung",
      generalWard: "Allgemeinstation",
      icu: "Intensivstation",
      emergencyRoom: "Notaufnahme",
      logout: "Abmelden",
      fromYesterday: "+2 von gestern",
      hoursRemaining: "8 Stunden verbleibend",
      nextShift: "Nächste: Morgen 7 Uhr",
      urgent: "2 dringend"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;