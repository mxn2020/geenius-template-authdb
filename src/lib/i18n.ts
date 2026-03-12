const translations: Record<string, Record<string, string>> = {
  en: {
    'common.loading': 'Loading...',
    'common.save': 'Save Changes',
    'common.cancel': 'Cancel',
    'common.delete': 'Delete',
    'common.create': 'Create',
    'common.signIn': 'Sign In',
    'common.signOut': 'Sign Out',
    'common.signUp': 'Sign Up',
    'common.noAccount': "Don't have an account?",
    'common.hasAccount': 'Already have an account?',

    'nav.dashboard': 'Dashboard',
    'nav.items': 'Items',
    'nav.settings': 'Settings',

    'dashboard.title': 'Dashboard',
    'dashboard.subtitle': 'Overview of your data.',
    'dashboard.getStarted.title': 'Getting Started',
    'dashboard.getStarted.desc': 'This template includes Convex backend with ConvexAuth, a CRUD items table, and composable schema patterns.',

    'items.title': 'Items',
    'items.subtitle': 'Manage your data items.',
    'items.addItem': 'Add Item',
    'items.newItem': 'New Item',
    'items.titleField': 'Title',
    'items.titlePlaceholder': 'Item title...',
    'items.descriptionField': 'Description',
    'items.descPlaceholder': 'Optional description...',
    'items.noItems': 'No items yet. Click "Add Item" to create one.',
    'items.status': 'Status',
    'items.actions': 'Actions',

    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.createAccount': 'Create Account',
    'auth.invalidCredentials': 'Invalid email or password.',
    'auth.createFailed': 'Could not create account.',

    'settings.title': 'Settings',
    'settings.general': 'General',
    'settings.darkMode': 'Dark Mode',
    'settings.darkMode.desc': 'Toggle dark theme',
    'settings.notifications': 'Notifications',
    'settings.notifications.desc': 'Receive email notifications',
    'settings.dangerZone': 'Danger Zone',
    'settings.dangerZone.desc': 'Irreversible and destructive actions.',
    'settings.deleteAccount': 'Delete Account',
  },
  de: {
    'common.loading': 'Wird geladen...',
    'common.save': 'Änderungen speichern',
    'common.cancel': 'Abbrechen',
    'common.delete': 'Löschen',
    'common.create': 'Erstellen',
    'common.signIn': 'Anmelden',
    'common.signOut': 'Abmelden',
    'common.signUp': 'Registrieren',
    'common.noAccount': 'Noch kein Konto?',
    'common.hasAccount': 'Bereits ein Konto?',

    'nav.dashboard': 'Übersicht',
    'nav.items': 'Einträge',
    'nav.settings': 'Einstellungen',

    'dashboard.title': 'Übersicht',
    'dashboard.subtitle': 'Überblick über deine Daten.',
    'dashboard.getStarted.title': 'Erste Schritte',
    'dashboard.getStarted.desc': 'Dieses Template enthält Convex-Backend mit ConvexAuth und eine CRUD-Tabelle.',

    'items.title': 'Einträge',
    'items.subtitle': 'Verwalte deine Daten.',
    'items.addItem': 'Eintrag hinzufügen',
    'items.newItem': 'Neuer Eintrag',
    'items.titleField': 'Titel',
    'items.titlePlaceholder': 'Titel...',
    'items.descriptionField': 'Beschreibung',
    'items.descPlaceholder': 'Optionale Beschreibung...',
    'items.noItems': 'Noch keine Einträge. Klicke auf "Eintrag hinzufügen".',
    'items.status': 'Status',
    'items.actions': 'Aktionen',

    'auth.email': 'E-Mail',
    'auth.password': 'Passwort',
    'auth.createAccount': 'Konto erstellen',
    'auth.invalidCredentials': 'Ungültige E-Mail oder Passwort.',
    'auth.createFailed': 'Konto konnte nicht erstellt werden.',

    'settings.title': 'Einstellungen',
    'settings.general': 'Allgemein',
    'settings.darkMode': 'Dunkelmodus',
    'settings.darkMode.desc': 'Dunkles Design umschalten',
    'settings.notifications': 'Benachrichtigungen',
    'settings.notifications.desc': 'E-Mail-Benachrichtigungen erhalten',
    'settings.dangerZone': 'Gefahrenzone',
    'settings.dangerZone.desc': 'Unwiderrufliche und zerstörerische Aktionen.',
    'settings.deleteAccount': 'Konto löschen',
  },
};

let currentLocale = 'en';

export function setLocale(locale: string): void {
  if (translations[locale]) currentLocale = locale;
}

export function getLocale(): string {
  return currentLocale;
}

export function t(key: string): string {
  return translations[currentLocale]?.[key] ?? translations['en']?.[key] ?? key;
}

export function getSupportedLocales(): string[] {
  return Object.keys(translations);
}
