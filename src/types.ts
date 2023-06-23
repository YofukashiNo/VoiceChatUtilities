import { types as DefaultTypes } from "replugged";
export { types as DefaultTypes } from "replugged";
export type { ReactElement, ComponentClass } from "react";
export interface Permissions {
  ADD_REACTIONS: bigint;
  ADMINISTRATOR: bigint;
  ATTACH_FILES: bigint;
  BAN_MEMBERS: bigint;
  CHANGE_NICKNAME: bigint;
  CONNECT: bigint;
  CREATE_EVENTS: bigint;
  CREATE_GUILD_EXPRESSIONS: bigint;
  CREATE_INSTANT_INVITE: bigint;
  CREATE_PRIVATE_THREADS: bigint;
  CREATE_PUBLIC_THREADS: bigint;
  DEAFEN_MEMBERS: bigint;
  EMBED_LINKS: bigint;
  KICK_MEMBERS: bigint;
  MANAGE_CHANNELS: bigint;
  MANAGE_EVENTS: bigint;
  MANAGE_GUILD: bigint;
  MANAGE_GUILD_EXPRESSIONS: bigint;
  MANAGE_MESSAGES: bigint;
  MANAGE_NICKNAMES: bigint;
  MANAGE_ROLES: bigint;
  MANAGE_THREADS: bigint;
  MANAGE_WEBHOOKS: bigint;
  MENTION_EVERYONE: bigint;
  MODERATE_MEMBERS: bigint;
  MOVE_MEMBERS: bigint;
  MUTE_MEMBERS: bigint;
  PRIORITY_SPEAKER: bigint;
  READ_MESSAGE_HISTORY: bigint;
  REQUEST_TO_SPEAK: bigint;
  SEND_MESSAGES: bigint;
  SEND_MESSAGES_IN_THREADS: bigint;
  SEND_TTS_MESSAGES: bigint;
  SEND_VOICE_MESSAGES: bigint;
  SPEAK: bigint;
  STREAM: bigint;
  USE_APPLICATION_COMMANDS: bigint;
  USE_EMBEDDED_ACTIVITIES: bigint;
  USE_EXTERNAL_EMOJIS: bigint;
  USE_EXTERNAL_SOUNDS: bigint;
  USE_EXTERNAL_STICKERS: bigint;
  USE_SOUNDBOARD: bigint;
  USE_VAD: bigint;
  VIEW_AUDIT_LOG: bigint;
  VIEW_CHANNEL: bigint;
  VIEW_CREATOR_MONETIZATION_ANALYTICS: bigint;
  VIEW_GUILD_ANALYTICS: bigint;
}
export interface ChannelTypes {
  ANNOUNCEMENT_THREAD: number;
  DM: number;
  GROUP_DM: number;
  GUILD_ANNOUNCEMENT: number;
  GUILD_CATEGORY: number;
  GUILD_DIRECTORY: number;
  GUILD_FORUM: number;
  GUILD_STAGE_VOICE: number;
  GUILD_STORE: number;
  GUILD_TEXT: number;
  GUILD_VOICE: number;
  PRIVATE_THREAD: number;
  PUBLIC_THREAD: number;
  UNKNOWN: number;
}
export interface URL {
  ACTIVE_CHANNELS: DefaultTypes.AnyFunction;
  ACTIVITIES: string;
  ACTIVITY_CHANNEL_LAUNCH: DefaultTypes.AnyFunction;
  ACTIVITY_SHELF: string;
  ACTIVITY_TEST_MODE: DefaultTypes.AnyFunction;
  ACTIVITY_UPLOAD_ATTACHMENT: DefaultTypes.AnyFunction;
  ALL_ARCHIVED_THREADS: DefaultTypes.AnyFunction;
  APPLICATIONS: string;
  APPLICATIONS_DETECTABLE: string;
  APPLICATIONS_PUBLIC: string;
  APPLICATIONS_SHELF: string;
  APPLICATIONS_TRENDING: string;
  APPLICATION_ACTIVITY_STATISTICS: DefaultTypes.AnyFunction;
  APPLICATION_ASSETS: DefaultTypes.AnyFunction;
  APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS: DefaultTypes.AnyFunction;
  APPLICATION_BRANCHES: string;
  APPLICATION_BRANCH_LIST: DefaultTypes.AnyFunction;
  APPLICATION_BUILD_SIZE: DefaultTypes.AnyFunction;
  APPLICATION_COMMANDS_SEARCH: DefaultTypes.AnyFunction;
  APPLICATION_DIRECTORY_APPLICATION: DefaultTypes.AnyFunction;
  APPLICATION_DIRECTORY_CATEGORIES: string;
  APPLICATION_DIRECTORY_COLLECTIONS: string;
  APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE: DefaultTypes.AnyFunction;
  APPLICATION_DIRECTORY_EMBED_APPLICATION: DefaultTypes.AnyFunction;
  APPLICATION_DIRECTORY_SEARCH: string;
  APPLICATION_DIRECTORY_SIMILAR: DefaultTypes.AnyFunction;
  APPLICATION_EXTERNAL_ASSETS: DefaultTypes.AnyFunction;
  APPLICATION_ICON: DefaultTypes.AnyFunction;
  APPLICATION_LIVE_BUILD: DefaultTypes.AnyFunction;
  APPLICATION_OWNER_TRANSFER: DefaultTypes.AnyFunction;
  APPLICATION_PUBLIC: DefaultTypes.AnyFunction;
  APPLICATION_RPC: DefaultTypes.AnyFunction;
  APPLICATION_SKUS: DefaultTypes.AnyFunction;
  APPLICATION_STORAGE: DefaultTypes.AnyFunction;
  APPLICATION_SUBSCRIPTION_GROUP_LISTING: DefaultTypes.AnyFunction;
  APPLICATION_TICKET: DefaultTypes.AnyFunction;
  APPLICATION_USER_ROLE_CONNECTIONS: string;
  APPLIED_GUILD_BOOST: DefaultTypes.AnyFunction;
  APPLIED_GUILD_BOOSTS_FOR_GUILD: DefaultTypes.AnyFunction;
  APPLIED_GUILD_BOOST_COOLDOWN: string;
  AUTHORIZE_IP: string;
  AUTHORIZE_PAYMENT: string;
  AUTH_LOCATION_METADATA: string;
  AUTH_SESSIONS: string;
  AUTH_SESSIONS_LOGOUT: string;
  AUTH_SESSION_NOTIFICATIONS_DEBUG: string;
  AVATAR: DefaultTypes.AnyFunction;
  AVATAR_DECORATIONS: DefaultTypes.AnyFunction;
  AVATAR_DECORATION_PRESETS: DefaultTypes.AnyFunction;
  BACKGROUND_SYNC: string;
  BADGE_ICON: DefaultTypes.AnyFunction;
  BILLING_APPLE_SUBSCRIPTION: DefaultTypes.AnyFunction;
  BILLING_APPLY_APPLE_RECEIPT: string;
  BILLING_COUNTRY_CODE: string;
  BILLING_CREATE_APPLE_IAP_JWT_TOKEN: string;
  BILLING_INVOICE_MANUAL_PAYMENT: DefaultTypes.AnyFunction;
  BILLING_LOCALIZED_PROMO: string;
  BILLING_PAYMENT: DefaultTypes.AnyFunction;
  BILLING_PAYMENTS: string;
  BILLING_PAYMENTS_REFUND: DefaultTypes.AnyFunction;
  BILLING_PAYMENTS_VOID: DefaultTypes.AnyFunction;
  BILLING_PAYMENT_SOURCE: DefaultTypes.AnyFunction;
  BILLING_PAYMENT_SOURCES: string;
  BILLING_PAYMENT_SOURCES_VALIDATE_BILLING_ADDRESS: string;
  BILLING_PAYPAL_BILLING_AGREEMENT_TOKENS: string;
  BILLING_POPUP_BRIDGE: DefaultTypes.AnyFunction;
  BILLING_POPUP_BRIDGE_CALLBACK: DefaultTypes.AnyFunction;
  BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX: DefaultTypes.AnyFunction;
  BILLING_STRIPE_PAYMENT_INTENTS: DefaultTypes.AnyFunction;
  BILLING_STRIPE_PAYMENT_INTENTS_VIA_ID: DefaultTypes.AnyFunction;
  BILLING_STRIPE_SETUP_INTENT_SECRET: string;
  BILLING_SUBSCRIPTION: DefaultTypes.AnyFunction;
  BILLING_SUBSCRIPTIONS: string;
  BILLING_SUBSCRIPTIONS_PREVIEW: string;
  BILLING_SUBSCRIPTION_INVOICE: DefaultTypes.AnyFunction;
  BILLING_SUBSCRIPTION_PREVIEW: DefaultTypes.AnyFunction;
  BOGO_PROMOTIONS: string;
  BROADCAST_PRIVATE_CHANNEL: string;
  BUG_REPORTS: string;
  BULK_ACK: string;
  BURST_CREDIT_BALANCE: string;
  CALL: DefaultTypes.AnyFunction;
  CALLSCOPE_LOGS: DefaultTypes.AnyFunction;
  CALL_RING: DefaultTypes.AnyFunction;
  CALL_STOP_RINGING: DefaultTypes.AnyFunction;
  CAPTCHA: string;
  CHANNEL: DefaultTypes.AnyFunction;
  CHANNELS: string;
  CHANNEL_ACK: DefaultTypes.AnyFunction;
  CHANNEL_AFFINITIES: string;
  CHANNEL_CONVERT: DefaultTypes.AnyFunction;
  CHANNEL_ENTITLEMENT_GRANT: DefaultTypes.AnyFunction;
  CHANNEL_FOLLOWERS: DefaultTypes.AnyFunction;
  CHANNEL_FOLLOWER_MESSAGE_STATS: DefaultTypes.AnyFunction;
  CHANNEL_FOLLOWER_STATS: DefaultTypes.AnyFunction;
  CHANNEL_HIGHLIGHTS: DefaultTypes.AnyFunction;
  CHANNEL_ICON: DefaultTypes.AnyFunction;
  CHANNEL_INTEGRATION: DefaultTypes.AnyFunction;
  CHANNEL_INTEGRATIONS: DefaultTypes.AnyFunction;
  CHANNEL_MESSAGE_THREADS: DefaultTypes.AnyFunction;
  CHANNEL_PERMISSIONS_OVERWRITE: DefaultTypes.AnyFunction;
  CHANNEL_RECIPIENT: DefaultTypes.AnyFunction;
  CHANNEL_RECIPIENTS: DefaultTypes.AnyFunction;
  CHANNEL_RECIPIENT_CONSENT: DefaultTypes.AnyFunction;
  CHANNEL_RECIPIENT_REJECT_BATCH: DefaultTypes.AnyFunction;
  CHANNEL_STORE_LISTING: DefaultTypes.AnyFunction;
  CHANNEL_STORE_LISTING_SKU: DefaultTypes.AnyFunction;
  CHANNEL_THREADS: DefaultTypes.AnyFunction;
  CHANNEL_WEBHOOKS: DefaultTypes.AnyFunction;
  CLAIMED_OUTBOUND_PROMOTION_CODES: string;
  CLAIM_OUTBOUND_PROMOTION_CODE: DefaultTypes.AnyFunction;
  COLLECTIBLES: string;
  COLLECTIBLE_ASSET: DefaultTypes.AnyFunction;
  COLLECTIBLE_STORE_LISTING: DefaultTypes.AnyFunction;
  CONNECTION: DefaultTypes.AnyFunction;
  CONNECTIONS: string;
  CONNECTIONS_AUTHORIZE: DefaultTypes.AnyFunction;
  CONNECTIONS_AUTHORIZE_CONTINUATION: DefaultTypes.AnyFunction;
  CONNECTIONS_AUTHORIZE_LINK: DefaultTypes.AnyFunction;
  CONNECTIONS_AUTHORIZE_LINK_DEVICE: DefaultTypes.AnyFunction;
  CONNECTIONS_CALLBACK: DefaultTypes.AnyFunction;
  CONNECTIONS_CALLBACK_CONTINUATION: DefaultTypes.AnyFunction;
  CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK: DefaultTypes.AnyFunction;
  CONNECTION_ACCESS_TOKEN: DefaultTypes.AnyFunction;
  CONNECTION_REFRESH: DefaultTypes.AnyFunction;
  CONNECTION_SYNC_CONTACTS: string;
  CONNECTION_SYNC_CONTACTS_SETTINGS: string;
  CONNECT_REQUEST: DefaultTypes.AnyFunction;
  CONNECT_REQUEST_CREATE: string;
  CONSOLES_DEVICES: DefaultTypes.AnyFunction;
  CONSOLES_DEVICES_COMMAND: DefaultTypes.AnyFunction;
  CONSOLES_DEVICES_COMMANDS: DefaultTypes.AnyFunction;
  CREATE_REFERRAL: DefaultTypes.AnyFunction;
  CREATE_REFERRAL_PREVIEW: DefaultTypes.AnyFunction;
  CREATE_USER_TRIAL_OFFER: DefaultTypes.AnyFunction;
  CREATOR_MONETIZATION_ACCEPT_NEW_TERMS: DefaultTypes.AnyFunction;
  CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED: DefaultTypes.AnyFunction;
  CREATOR_MONETIZATION_ACCEPT_TERMS: DefaultTypes.AnyFunction;
  CREATOR_MONETIZATION_ACCEPT_TERMS_V2: DefaultTypes.AnyFunction;
  CREATOR_MONETIZATION_ELIGIBILITY: DefaultTypes.AnyFunction;
  CREATOR_MONETIZATION_ENABLE_REQUESTS: DefaultTypes.AnyFunction;
  CREATOR_MONETIZATION_MARKETING_ONBOARDING: DefaultTypes.AnyFunction;
  CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY: string;
  CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD: DefaultTypes.AnyFunction;
  CREATOR_MONETIZATION_REMOVE_MONETIZATION: DefaultTypes.AnyFunction;
  CREATOR_MONETIZATION_RESTRICTIONS: DefaultTypes.AnyFunction;
  DEBUG_LOG: DefaultTypes.AnyFunction;
  DEBUG_LOGS: DefaultTypes.AnyFunction;
  DELETE_ACCOUNT: string;
  DELETE_USER_TRIAL_OFFER: DefaultTypes.AnyFunction;
  DEVICES: string;
  DEVICES_SYNC: string;
  DEVICES_SYNC_TOKEN: string;
  DIRECTORY_CHANNEL_CATEGORY_COUNTS: DefaultTypes.AnyFunction;
  DIRECTORY_CHANNEL_ENTRIES: DefaultTypes.AnyFunction;
  DIRECTORY_CHANNEL_ENTRY: DefaultTypes.AnyFunction;
  DIRECTORY_CHANNEL_LIST_BY_ID: DefaultTypes.AnyFunction;
  DIRECTORY_ENTRIES_BROADCAST_INFO: DefaultTypes.AnyFunction;
  DIRECTORY_ENTRIES_SEARCH: DefaultTypes.AnyFunction;
  DISABLE_ACCOUNT: string;
  DISABLE_EMAIL_NOTIFICATIONS: string;
  DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS: string;
  DISCORDIFY_ME: string;
  DM_CHANNEL: DefaultTypes.AnyFunction;
  DOWNGRADE_SUBSCRIPTION: string;
  DROPS_CLAIM_REWARD_CODE: string;
  DROPS_ELIGIBILITY: string;
  DROPS_ENROLL_USER: string;
  DROPS_HEARTBEAT: DefaultTypes.AnyFunction;
  DROPS_PLATFORM_AVAILABILITY: string;
  DROPS_PROGRESS: DefaultTypes.AnyFunction;
  DROPS_REWARD_CODE: string;
  DROPS_USER_STATUS: string;
  ELIGIBLE_APPLICATION_SUBSCRIPTION_GUILDS: string;
  EMAIL_SETTINGS: string;
  EMIT_GOOGLE_PLAY_METRICS: string;
  EMOJI: DefaultTypes.AnyFunction;
  EMOJI_GUILD_DATA: DefaultTypes.AnyFunction;
  ENTITLEMENTS_FOR_APPLICATION: DefaultTypes.AnyFunction;
  ENTITLEMENTS_FOR_USER: string;
  ENTITLEMENTS_GIFTABLE: string;
  ENTITLEMENT_TICKET: DefaultTypes.AnyFunction;
  EXPERIMENTS: string;
  FAMILY_CENTER_FETCH_TEEN_USER: DefaultTypes.AnyFunction;
  FAMILY_CENTER_LINKED_USERS: string;
  FAMILY_CENTER_LINK_CODE: string;
  FAMILY_CENTER_TEEN_ACTIVITY: DefaultTypes.AnyFunction;
  FAMILY_CENTER_TEEN_ACTIVITY_ME: string;
  FAMILY_CENTER_TEEN_ACTIVITY_MORE: DefaultTypes.AnyFunction;
  FINISH_MFA_CHECK: string;
  FORGOT_PASSWORD: string;
  FORUM_POSTS: DefaultTypes.AnyFunction;
  FORUM_TAG: DefaultTypes.AnyFunction;
  FORUM_TAGS: DefaultTypes.AnyFunction;
  FRIEND_FINDER: string;
  FRIEND_FINDER_HIDE_INVITE_SUGGESTION: string;
  FRIEND_INVITES: string;
  FRIEND_SUGGESTION: DefaultTypes.AnyFunction;
  FRIEND_SUGGESTIONS: string;
  FUNIMATION_PROMOTION: string;
  GET_REFERRALS_REMAINING: string;
  GET_REPORT_MENU: DefaultTypes.AnyFunction;
  GIFS_SEARCH: string;
  GIFS_SELECT: string;
  GIFS_SUGGEST: string;
  GIFS_TRENDING: string;
  GIFS_TRENDING_GIFS: string;
  GIFS_TRENDING_SEARCH: string;
  GIFT_CODE_REDEEM: DefaultTypes.AnyFunction;
  GIFT_CODE_RESOLVE: DefaultTypes.AnyFunction;
  GUILD: DefaultTypes.AnyFunction;
  GUILDS: string;
  GUILD_ADMIN_SERVER_ELIGIBILITY: DefaultTypes.AnyFunction;
  GUILD_AFFINITIES: string;
  GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW: DefaultTypes.AnyFunction;
  GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW: DefaultTypes.AnyFunction;
  GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION: DefaultTypes.AnyFunction;
  GUILD_ANALYTICS_MEMBER_INSIGHTS: DefaultTypes.AnyFunction;
  GUILD_ANALYTICS_OVERVIEW: DefaultTypes.AnyFunction;
  GUILD_APPLICATIONS: DefaultTypes.AnyFunction;
  GUILD_AUDIT_LOG: DefaultTypes.AnyFunction;
  GUILD_AUTOMOD_ALERT_ACTION: DefaultTypes.AnyFunction;
  GUILD_AUTOMOD_CLEAR_MENTION_RAID: DefaultTypes.AnyFunction;
  GUILD_AUTOMOD_RULE: DefaultTypes.AnyFunction;
  GUILD_AUTOMOD_RULES: DefaultTypes.AnyFunction;
  GUILD_AUTOMOD_VALIDATE_RULE: DefaultTypes.AnyFunction;
  GUILD_BAN: DefaultTypes.AnyFunction;
  GUILD_BANNER: DefaultTypes.AnyFunction;
  GUILD_BANS: DefaultTypes.AnyFunction;
  GUILD_CHANNELS: DefaultTypes.AnyFunction;
  GUILD_CHANNEL_EMOJIS: DefaultTypes.AnyFunction;
  GUILD_CLYDE_SETTINGS: DefaultTypes.AnyFunction;
  GUILD_COMMANDS_FOR_APPLICATION: DefaultTypes.AnyFunction;
  GUILD_DELETE: DefaultTypes.AnyFunction;
  GUILD_DISCOVERY: string;
  GUILD_DISCOVERY_CATEGORIES: string;
  GUILD_DISCOVERY_CHECKLIST: DefaultTypes.AnyFunction;
  GUILD_DISCOVERY_METADATA: DefaultTypes.AnyFunction;
  GUILD_DISCOVERY_REQUIREMENTS: DefaultTypes.AnyFunction;
  GUILD_DISCOVERY_SLUG: DefaultTypes.AnyFunction;
  GUILD_DISCOVERY_SPLASH: DefaultTypes.AnyFunction;
  GUILD_DISCOVERY_UPDATE_CATEGORY: DefaultTypes.AnyFunction;
  GUILD_DISCOVERY_VALID_TERM: string;
  GUILD_EMOJI: DefaultTypes.AnyFunction;
  GUILD_EMOJIS: DefaultTypes.AnyFunction;
  GUILD_ENTITLEMENTS: DefaultTypes.AnyFunction;
  GUILD_EVENT: DefaultTypes.AnyFunction;
  GUILD_EVENTS: string;
  GUILD_EVENTS_FOR_GUILD: DefaultTypes.AnyFunction;
  GUILD_EVENT_IMAGE: DefaultTypes.AnyFunction;
  GUILD_EVENT_USERS: DefaultTypes.AnyFunction;
  GUILD_FEATURE_ACK: DefaultTypes.AnyFunction;
  GUILD_FEED: DefaultTypes.AnyFunction;
  GUILD_FEED_FEATURE_ITEM: DefaultTypes.AnyFunction;
  GUILD_FEED_MARK_SEEN: DefaultTypes.AnyFunction;
  GUILD_FEED_MESSAGE_REMOVE: DefaultTypes.AnyFunction;
  GUILD_FEED_MESSAGE_SET_PREFERENCE: DefaultTypes.AnyFunction;
  GUILD_HOME_HEADER: DefaultTypes.AnyFunction;
  GUILD_HOME_SETTINGS: DefaultTypes.AnyFunction;
  GUILD_ICON: DefaultTypes.AnyFunction;
  GUILD_INCIDENT_ACTIONS: DefaultTypes.AnyFunction;
  GUILD_INCIDENT_REPORT_FALSE_ALARM: DefaultTypes.AnyFunction;
  GUILD_INCIDENT_REPORT_RAID: DefaultTypes.AnyFunction;
  GUILD_INSTANT_INVITES: DefaultTypes.AnyFunction;
  GUILD_INTEGRATION: DefaultTypes.AnyFunction;
  GUILD_INTEGRATIONS: DefaultTypes.AnyFunction;
  GUILD_INTEGRATION_SYNC: DefaultTypes.AnyFunction;
  GUILD_JOIN: DefaultTypes.AnyFunction;
  GUILD_JOIN_REQUEST: DefaultTypes.AnyFunction;
  GUILD_JOIN_REQUESTS: DefaultTypes.AnyFunction;
  GUILD_JOIN_REQUEST_ACK: DefaultTypes.AnyFunction;
  GUILD_LEAVE: DefaultTypes.AnyFunction;
  GUILD_MEMBER: DefaultTypes.AnyFunction;
  GUILD_MEMBERS: DefaultTypes.AnyFunction;
  GUILD_MEMBERS_UNUSUAL_DM_ACTIVITY: DefaultTypes.AnyFunction;
  GUILD_MEMBER_ACTIONS: DefaultTypes.AnyFunction;
  GUILD_MEMBER_ACTION_UPDATE: DefaultTypes.AnyFunction;
  GUILD_MEMBER_AVATAR: DefaultTypes.AnyFunction;
  GUILD_MEMBER_BANNER: DefaultTypes.AnyFunction;
  GUILD_MEMBER_NICK: DefaultTypes.AnyFunction;
  GUILD_MEMBER_REQUEST_TO_JOIN: DefaultTypes.AnyFunction;
  GUILD_MEMBER_VERIFICATION: DefaultTypes.AnyFunction;
  GUILD_MFA: DefaultTypes.AnyFunction;
  GUILD_MIGRATE_COMMAND_SCOPE: DefaultTypes.AnyFunction;
  GUILD_ONBOARDING: DefaultTypes.AnyFunction;
  GUILD_ONBOARDING_PROMPT: DefaultTypes.AnyFunction;
  GUILD_ONBOARDING_RESPONSES: DefaultTypes.AnyFunction;
  GUILD_PINCODE: DefaultTypes.AnyFunction;
  GUILD_PREVIEW: DefaultTypes.AnyFunction;
  GUILD_PRODUCTS: DefaultTypes.AnyFunction;
  GUILD_PRODUCT_ATTACHMENT_DOWNLOAD: DefaultTypes.AnyFunction;
  GUILD_PRODUCT_CREATE_ATTACHMENT_UPLOAD: DefaultTypes.AnyFunction;
  GUILD_PRODUCT_LISTINGS: DefaultTypes.AnyFunction;
  GUILD_PROFILE: DefaultTypes.AnyFunction;
  GUILD_PRUNE: DefaultTypes.AnyFunction;
  GUILD_RECOMMENDATIONS: DefaultTypes.AnyFunction;
  GUILD_ROLE: DefaultTypes.AnyFunction;
  GUILD_ROLES: DefaultTypes.AnyFunction;
  GUILD_ROLE_CONNECTIONS_ASSIGN: DefaultTypes.AnyFunction;
  GUILD_ROLE_CONNECTIONS_CONFIGURATION: DefaultTypes.AnyFunction;
  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS: DefaultTypes.AnyFunction;
  GUILD_ROLE_CONNECTIONS_ELIGIBILITY: DefaultTypes.AnyFunction;
  GUILD_ROLE_CONNECTIONS_UNASSIGN: DefaultTypes.AnyFunction;
  GUILD_ROLE_MEMBERS: DefaultTypes.AnyFunction;
  GUILD_ROLE_MEMBER_COUNTS: DefaultTypes.AnyFunction;
  GUILD_ROLE_MEMBER_IDS: DefaultTypes.AnyFunction;
  GUILD_ROLE_SUBSCRIPTIONS_SETTINGS: DefaultTypes.AnyFunction;
  GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS: DefaultTypes.AnyFunction;
  GUILD_ROLE_SUBSCRIPTION_GROUP_LISTING_ARCHIVE: DefaultTypes.AnyFunction;
  GUILD_ROLE_SUBSCRIPTION_LISTINGS: DefaultTypes.AnyFunction;
  GUILD_ROLE_SUBSCRIPTION_LISTING_TEMPLATES: DefaultTypes.AnyFunction;
  GUILD_ROLE_SUBSCRIPTION_LISTING_TRIAL: DefaultTypes.AnyFunction;
  GUILD_ROLE_SUBSCRIPTION_TRIALS: DefaultTypes.AnyFunction;
  GUILD_ROLE_SUBSCRIPTION_TRIAL_ELIGIBILITY: DefaultTypes.AnyFunction;
  GUILD_SOUNDBOARD_SOUND: DefaultTypes.AnyFunction;
  GUILD_SOUNDBOARD_SOUNDS: DefaultTypes.AnyFunction;
  GUILD_SPLASH: DefaultTypes.AnyFunction;
  GUILD_STICKER: DefaultTypes.AnyFunction;
  GUILD_STICKER_PACKS: DefaultTypes.AnyFunction;
  GUILD_TEMPLATE: DefaultTypes.AnyFunction;
  GUILD_TEMPLATES: DefaultTypes.AnyFunction;
  GUILD_TEMPLATE_ICON: DefaultTypes.AnyFunction;
  GUILD_TOP_READ_CHANNELS: DefaultTypes.AnyFunction;
  GUILD_VANITY_URL: DefaultTypes.AnyFunction;
  GUILD_WEBHOOKS: DefaultTypes.AnyFunction;
  GUILD_WELCOME_SCREEN: DefaultTypes.AnyFunction;
  GUILD_WIDGET: DefaultTypes.AnyFunction;
  HANDOFF: string;
  HANDOFF_EXCHANGE: string;
  HUB_EMAIL_VERIFY: string;
  HUB_EMAIL_VERIFY_CODE: string;
  HUB_EMAIL_VERIFY_SEND: string;
  HUB_WAITLIST_SIGNUP: string;
  HYPESQUAD_ONLINE: string;
  INSTANT_INVITES: DefaultTypes.AnyFunction;
  INTEGRATIONS: string;
  INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS: string;
  INTEGRATION_JOIN: DefaultTypes.AnyFunction;
  INTEGRATION_SEARCH: DefaultTypes.AnyFunction;
  INTERACTIONS: string;
  INVENTORY_COLLECT: string;
  INVENTORY_GET: string;
  INVENTORY_UNCOLLECT: string;
  INVITE: DefaultTypes.AnyFunction;
  JOIN_ADMIN_SERVER: DefaultTypes.AnyFunction;
  LIBRARY: string;
  LIBRARY_APPLICATION_BRANCH: DefaultTypes.AnyFunction;
  LIBRARY_APPLICATION_DELETE: DefaultTypes.AnyFunction;
  LIBRARY_APPLICATION_INSTALLED: DefaultTypes.AnyFunction;
  LOBBIES: string;
  LOBBY: DefaultTypes.AnyFunction;
  LOBBY_MEMBER: DefaultTypes.AnyFunction;
  LOBBY_SEARCH: string;
  LOBBY_SEND: DefaultTypes.AnyFunction;
  LOGIN: string;
  LOGIN_MFA: string;
  LOGIN_SMS: string;
  LOGIN_SMS_SEND: string;
  LOGIN_WEBAUTHN: string;
  LOGOUT: string;
  ME: string;
  MEDIA_POST_RESHARE_GET_PREVIEW: DefaultTypes.AnyFunction;
  MEMBER_SAFETY_SUPPLEMENTAL: DefaultTypes.AnyFunction;
  MENTIONS: string;
  MENTIONS_MESSAGE_ID: DefaultTypes.AnyFunction;
  MESSAGE: DefaultTypes.AnyFunction;
  MESSAGES: DefaultTypes.AnyFunction;
  MESSAGES_GREET: DefaultTypes.AnyFunction;
  MESSAGE_ACK: DefaultTypes.AnyFunction;
  MESSAGE_CREATE_ATTACHMENT_UPLOAD: DefaultTypes.AnyFunction;
  MESSAGE_CROSSPOST: DefaultTypes.AnyFunction;
  MESSAGE_DELETE_UPLOAD: DefaultTypes.AnyFunction;
  MESSAGE_INTERACTION_DATA: DefaultTypes.AnyFunction;
  MESSAGE_LOG_GUILD_CHANNELS: string;
  MESSAGE_LOG_PRIVATE_CHANNELS: string;
  MESSAGE_PREVIEWS: string;
  MESSAGE_REQUESTS_SUPPLEMENTAL_DATA: string;
  METRICS: string;
  MFA_CODES_VERIFICATION: string;
  MFA_SEND_VERIFICATION_KEY: string;
  MFA_SMS_DISABLE: string;
  MFA_SMS_ENABLE: string;
  MFA_TOTP_DISABLE: string;
  MFA_TOTP_ENABLE: string;
  MFA_WEBAUTHN_CREDENTIAL: DefaultTypes.AnyFunction;
  MFA_WEBAUTHN_CREDENTIALS: string;
  MY_ARCHIVED_THREADS: DefaultTypes.AnyFunction;
  NETWORKING_TOKEN: string;
  NOTE: DefaultTypes.AnyFunction;
  NOTES: string;
  NOTIF_CENTER_ITEMS: DefaultTypes.AnyFunction;
  NOTIF_CENTER_ITEMS_ACK: DefaultTypes.AnyFunction;
  NOTIF_CENTER_ITEMS_BULK_ACK: string;
  OAUTH2_AUTHORIZE: string;
  OAUTH2_AUTHORIZE_SAMSUNG: string;
  OAUTH2_AUTHORIZE_SAMSUNG_CALLBACK: string;
  OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS: string;
  OAUTH2_CURRENT_AUTH: string;
  OAUTH2_DEVICE_FINISH: string;
  OAUTH2_DEVICE_VERIFY: string;
  OAUTH2_TOKEN: DefaultTypes.AnyFunction;
  OAUTH2_TOKENS: string;
  OAUTH2_WHITELIST_ACCEPT: string;
  OUTBOUND_PROMOTIONS: string;
  OUTBOUND_PROMOTIONS_PREVIEW: string;
  OWNED_APPLICATION_BRANCHES: DefaultTypes.AnyFunction;
  PARTNERS_APPLY: string;
  PARTNERS_CONNECTIONS: string;
  PARTNER_REQUIREMENTS: DefaultTypes.AnyFunction;
  PAYMENT_PAYOUT_GROUPS: DefaultTypes.AnyFunction;
  PHONE: string;
  PHONE_REVERIFY: string;
  PHONE_VERIFY_NO_PASSWORD: string;
  PIN: DefaultTypes.AnyFunction;
  PINS: DefaultTypes.AnyFunction;
  PINS_ACK: DefaultTypes.AnyFunction;
  POMELO_ATTEMPT: string;
  POMELO_CREATE: string;
  POMELO_SUGGESTIONS: string;
  POPULATE_CHANNEL_EMOJIS: DefaultTypes.AnyFunction;
  PREMIUM_USAGE: string;
  PRICE_TIERS: string;
  PRIVATE_CHANNEL_INTEGRATION_CONSENT: DefaultTypes.AnyFunction;
  REACTION: DefaultTypes.AnyFunction;
  REACTIONS: DefaultTypes.AnyFunction;
  REACTION_WITH_TYPE: DefaultTypes.AnyFunction;
  REFERRAL_OFFER_ID_RESOLVE: DefaultTypes.AnyFunction;
  REGIONS: DefaultTypes.AnyFunction;
  REGISTER: string;
  REGISTER_PHONE: string;
  REMOTE_AUTH_CANCEL: string;
  REMOTE_AUTH_FINISH: string;
  REMOTE_AUTH_INITIALIZE: string;
  REMOTE_AUTH_LOGIN: string;
  REMOVE_EMOJI_REACTIONS: DefaultTypes.AnyFunction;
  REMOVE_REACTIONS: DefaultTypes.AnyFunction;
  REPORT_OPTIONS: string;
  REPORT_V2: string;
  RESEND_PHONE: string;
  RESET_PASSWORD: string;
  ROLE_ICON: DefaultTypes.AnyFunction;
  SAVED_MESSAGES: string;
  SEARCH_CHANNEL: DefaultTypes.AnyFunction;
  SEARCH_DMS: string;
  SEARCH_GUILD: DefaultTypes.AnyFunction;
  SETTINGS: string;
  SETTINGS_CONSENT: string;
  SET_GUILD_MEMBER: DefaultTypes.AnyFunction;
  SHARED_CANVAS_EMOJI_HOSE: DefaultTypes.AnyFunction;
  SHARED_CANVAS_EMOJI_HOSES: DefaultTypes.AnyFunction;
  SHARED_CANVAS_LINES: DefaultTypes.AnyFunction;
  SOUNDBOARD_DEFAULT_SOUNDS: string;
  SOUNDBOARD_SOUND: DefaultTypes.AnyFunction;
  SSO: string;
  SSO_TOKEN: string;
  STAGE_INSTANCE: DefaultTypes.AnyFunction;
  STAGE_INSTANCES: string;
  STAGE_INSTANCES_EXTRA: string;
  STAGE_REPORT: DefaultTypes.AnyFunction;
  STICKER: DefaultTypes.AnyFunction;
  STICKER_ASSET: DefaultTypes.AnyFunction;
  STICKER_GUILD_DATA: DefaultTypes.AnyFunction;
  STICKER_PACK: DefaultTypes.AnyFunction;
  STICKER_PACKS: string;
  STORE_ASSET: DefaultTypes.AnyFunction;
  STORE_DIRECTORY: DefaultTypes.AnyFunction;
  STORE_DIRECTORY_LAYOUT: DefaultTypes.AnyFunction;
  STORE_DIRECTORY_LAYOUT_STICKER_PACKS: DefaultTypes.AnyFunction;
  STORE_EMAIL_RESEND_PAYMENT_VERIFICATION: string;
  STORE_EULA: DefaultTypes.AnyFunction;
  STORE_LISTING: DefaultTypes.AnyFunction;
  STORE_LISTINGS_SKU: DefaultTypes.AnyFunction;
  STORE_PUBLISHED_LISTINGS_APPLICATION: DefaultTypes.AnyFunction;
  STORE_PUBLISHED_LISTINGS_APPLICATIONS: string;
  STORE_PUBLISHED_LISTINGS_SKU: DefaultTypes.AnyFunction;
  STORE_PUBLISHED_LISTINGS_SKUS: string;
  STORE_PUBLISHED_LISTINGS_SKU_JOIN_GUILD: DefaultTypes.AnyFunction;
  STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS: DefaultTypes.AnyFunction;
  STORE_SKU: DefaultTypes.AnyFunction;
  STORE_SKU_PURCHASE: DefaultTypes.AnyFunction;
  STREAM: DefaultTypes.AnyFunction;
  STREAM_NOTIFY: DefaultTypes.AnyFunction;
  STREAM_PREVIEW: DefaultTypes.AnyFunction;
  SUBMIT_REPORT_MENU: DefaultTypes.AnyFunction;
  SUBSCRIPTION_PLAN_GROUP_LISTING: DefaultTypes.AnyFunction;
  SUBSCRIPTION_PLAN_GUILD_ROLE_GROUP_LISTING: DefaultTypes.AnyFunction;
  TEAMS: string;
  TENOR_ASSET_PATH: string;
  THREAD_MEMBER: DefaultTypes.AnyFunction;
  THREAD_MEMBER_SETTINGS: DefaultTypes.AnyFunction;
  THREAD_SEARCH: DefaultTypes.AnyFunction;
  TOP_EMOJIS_FOR_GUILD: DefaultTypes.AnyFunction;
  TRACK: string;
  TUTORIAL_INDICATOR: DefaultTypes.AnyFunction;
  TUTORIAL_INDICATORS: string;
  TUTORIAL_INDICATORS_SUPPRESS: string;
  TYPING: DefaultTypes.AnyFunction;
  UNACK_USER_TRIAL_OFFER: DefaultTypes.AnyFunction;
  UNFURL_EMBED_URLS: string;
  UNRESOLVED_GUILD_TEMPLATE: DefaultTypes.AnyFunction;
  UNVERIFIED_APPLICATIONS: string;
  UNVERIFIED_APPLICATIONS_ICONS: string;
  UPDATE_VOICE_STATE: DefaultTypes.AnyFunction;
  USER: DefaultTypes.AnyFunction;
  USERS: string;
  USER_ACHIEVEMENTS: DefaultTypes.AnyFunction;
  USER_ACHIEVEMENTS_FOR_USER: DefaultTypes.AnyFunction;
  USER_ACTIVITY_JOIN: DefaultTypes.AnyFunction;
  USER_ACTIVITY_METADATA: DefaultTypes.AnyFunction;
  USER_ACTIVITY_STATISTICS: string;
  USER_AFFINITIES: string;
  USER_AGREEMENTS: string;
  USER_APPLIED_GUILD_BOOSTS: string;
  USER_AVATAR_DECORATIONS: string;
  USER_BANNER: DefaultTypes.AnyFunction;
  USER_BROADCASTS: string;
  USER_BULK_RELATIONSHIPS: string;
  USER_CHANNELS: string;
  USER_CLYDE_CONSENT: string;
  USER_COLLECTIBLES: string;
  USER_EMAIL: string;
  USER_EMAIL_VERIFY_CODE: string;
  USER_GAMES_NOTIFICATIONS: string;
  USER_GAMES_NOTIFICATIONS_OVERRIDES: string;
  USER_GIFT_CODES: string;
  USER_GIFT_CODE_CREATE: string;
  USER_GIFT_CODE_REVOKE: DefaultTypes.AnyFunction;
  USER_GUILD_BOOST_SLOTS: string;
  USER_GUILD_BOOST_SLOT_CANCEL: DefaultTypes.AnyFunction;
  USER_GUILD_BOOST_SLOT_UNCANCEL: DefaultTypes.AnyFunction;
  USER_GUILD_EVENT: DefaultTypes.AnyFunction;
  USER_GUILD_EVENTS: string;
  USER_GUILD_SETTINGS: DefaultTypes.AnyFunction;
  USER_HARVEST: string;
  USER_JOIN_REQUEST_GUILDS: string;
  USER_NON_CHANNEL_ACK: DefaultTypes.AnyFunction;
  USER_PREMIUM_LIKELIHOOD: string;
  USER_PROFILE: DefaultTypes.AnyFunction;
  USER_RELATIONSHIP: DefaultTypes.AnyFunction;
  USER_RELATIONSHIPS: DefaultTypes.AnyFunction;
  USER_SETTINGS_PROTO: DefaultTypes.AnyFunction;
  USER_STICKER_PACKS: string;
  USER_SURVEY: string;
  USER_TRIAL_OFFER: string;
  USER_TRIAL_OFFERS: string;
  USER_TRIAL_OFFER_ACKNOWLEDGED: DefaultTypes.AnyFunction;
  VERIFY: string;
  VERIFY_PHONE: string;
  VERIFY_PHONE_FOR_TICKET: string;
  VERIFY_PURCHASE: string;
  VERIFY_RESEND: string;
  VIDEO_FILTER_ASSET: DefaultTypes.AnyFunction;
  VIDEO_FILTER_ASSETS: string;
  VIDEO_FILTER_ASSET_LAST_USEDChannel: DefaultTypes.AnyFunction;
  VIDEO_FILTER_ASSET_STORAGE: DefaultTypes.AnyFunction;
  VOICE_CHANNEL_EFFECTS: DefaultTypes.AnyFunction;
  WEBHOOK: DefaultTypes.AnyFunction;
  WEBHOOK_INTEGRATION: DefaultTypes.AnyFunction;
  XBOX_HANDOFF: string;
}
export interface PermissionStore {
  can: DefaultTypes.AnyFunction;
  canAccessGuildSettings: DefaultTypes.AnyFunction;
  canBasicChannel: DefaultTypes.AnyFunction;
  canImpersonateRole: DefaultTypes.AnyFunction;
  canManageUser: DefaultTypes.AnyFunction;
  canWithPartialContext: DefaultTypes.AnyFunction;
  computePermissions: DefaultTypes.AnyFunction;
  getChannelPermissions: DefaultTypes.AnyFunction;
  getChannelsVersion: DefaultTypes.AnyFunction;
  getGuildPermissionProps: DefaultTypes.AnyFunction;
  getPermissionUtils: DefaultTypes.AnyFunction;
  getGuildVersion: DefaultTypes.AnyFunction;
  getHighestRole: DefaultTypes.AnyFunction;
  initialize: DefaultTypes.AnyFunction;
  isRoleHigher: DefaultTypes.AnyFunction;
  clearVars: DefaultTypes.AnyFunction;
}
export interface User {
  avatar: string;
  avatarDecoration: undefined | string;
  bot: boolean;
  desktop: boolean;
  discriminator: string;
  email: null | string;
  flags: number;
  guildMemberAvatars: {
    [key: number]: string;
  };
  hasBouncedEmail: boolean;
  hasFlag: DefaultTypes.AnyFunction;
  id: string;
  isStaff: DefaultTypes.AnyFunction;
  isStaffPersonal: DefaultTypes.AnyFunction;
  mfaEnabled: boolean;
  mobile: boolean;
  nsfwAllowed: undefined | boolean;
  personalConnectionId: null | string;
  phone: null | string;
  premiumType: undefined | number;
  premiumUsageFlags: number;
  publicFlags: number;
  purchasedFlags: number;
  system: boolean;
  username: string;
  verified: boolean;
  createdAt: Date;
  tag: string;
}
export interface Channel {
  defaultAutoArchiveDuration: undefined | number;
  defaultThreadRateLimitPerUser: undefined | number;
  flags_: number;
  id: string;
  lastMessageId: string;
  lastPinTimestamp: string;
  memberListId: undefined | string;
  name: string;
  nsfw_: boolean;
  permissionOverwrites_: {
    [key: string | number]: {
      allow: bigint;
      deny: bigint;
      id: string;
      type: number;
    };
  };
  guild_id: string;
  position_: number;
  rateLimitPerUser_: number;
  topic_: string;
  type: number;
  version: undefined | number;
  accessPermissions: bigint;
  bitrate: number;
  flags: number;
  nsfw: boolean;
  permissionOverwrites: {
    [key: string | number]: {
      allow: bigint;
      deny: bigint;
      id: string;
      type: number;
    };
  };
  position: number;
  rateLimitPerUser: number;
  topic: undefined | string;
  userLimit: number;
  availableTags: Array<{
    name: string;
    id: string;
  }>;
}
export interface GuildMember {
  activities: [];
  applicationStream: null | string;
  avatar: null | string;
  color: number;
  colorRoleId: null | string;
  colorString: null | string;
  communicationDisabledUntil: null | string;
  flags: number;
  fullProfileLoadedTimestamp: undefined | number;
  guildId: string;
  hoistRoleId: null | string;
  iconRoleId: null | string;
  isMobileOnline: boolean;
  isOwner: boolean;
  isPending: boolean;
  joinedAt: string;
  nick: null | string;
  premiumSince: null | string;
  roles: string[];
  status: string;
  type: string;
  user: User;
  userId: string;
}
export interface VoiceState {
  comparator: string;
  member: GuildMember;
  nick: string;
  user: User;
  voiceState: {
    channelId: string;
    deaf: boolean;
    mute: boolean;
    requestToSpeakTimestamp: number | null;
    selfDeaf: boolean;
    selfMute: boolean;
    selfStream: boolean;
    selfVideo: boolean;
    sessionId: string;
    suppress: boolean;
    userId: string;
  };
}
export interface SortedVoiceStateStore {
  countVoiceStatesForChannel: DefaultTypes.AnyFunction;
  getAllVoiceStates: DefaultTypes.AnyFunction;
  getVoiceStateVersion: DefaultTypes.AnyFunction;
  getVoiceStates: DefaultTypes.AnyFunction;
  getVoiceStatesForChannel: DefaultTypes.AnyFunction;
  getVoiceStatesForChannelAlt: DefaultTypes.AnyFunction;
}
export interface GuildChannels {
  4: Array<{ channel: Channel; comparator: number }>;
  SELECTABLE: Array<{ channel: Channel; comparator: number }>;
  VOCAL: Array<{ channel: Channel; comparator: number }>;
  count: number;
  id: string;
}
export interface GuildChannelStore {
  getAllGuilds: DefaultTypes.AnyFunction;
  getChannels: DefaultTypes.AnyFunction;
  getDefaultChannel: DefaultTypes.AnyFunction;
  getDirectoryChannelIds: DefaultTypes.AnyFunction;
  getSelectableChannelIds: DefaultTypes.AnyFunction;
  getSelectableChannels: DefaultTypes.AnyFunction;
  getTextChannelNameDisambiguations: DefaultTypes.AnyFunction;
  getVocalChannelIds: DefaultTypes.AnyFunction;
  hasCategories: DefaultTypes.AnyFunction;
  hasChannels: DefaultTypes.AnyFunction;
  hasElevatedPermissions: DefaultTypes.AnyFunction;
  hasSelectableChannel: DefaultTypes.AnyFunction;
  initialize: DefaultTypes.AnyFunction;
}
export interface DiscordNative {
  accessibility: {
    isAccessibilitySupportEnabled: DefaultTypes.AnyFunction;
  };
  app: {
    dock: {
      setBadge: DefaultTypes.AnyFunction;
      bounce: DefaultTypes.AnyFunction;
      cancelBounce: DefaultTypes.AnyFunction;
    };
    getBuildNumber: DefaultTypes.AnyFunction;
    getDefaultDoubleClickAction: DefaultTypes.AnyFunction;
    getModuleVersions: DefaultTypes.AnyFunction;
    getPath: DefaultTypes.AnyFunction;
    getReleaseChannel: DefaultTypes.AnyFunction;
    getVersion: DefaultTypes.AnyFunction;
    registerUserInteractionHandler: DefaultTypes.AnyFunction;
    relaunch: DefaultTypes.AnyFunction;
    setBadgeCount: DefaultTypes.AnyFunction;
  };
  clipboard: {
    copy: DefaultTypes.AnyFunction;
    copyImage: DefaultTypes.AnyFunction;
    cut: DefaultTypes.AnyFunction;
    paste: DefaultTypes.AnyFunction;
    read: DefaultTypes.AnyFunction;
  };
  clips: {
    deleteClip: DefaultTypes.AnyFunction;
    loadClip: DefaultTypes.AnyFunction;
    loadClipsDirectory: DefaultTypes.AnyFunction;
  };
  crashReporter: {
    getMetadata: DefaultTypes.AnyFunction;
    updateCrashReporter: DefaultTypes.AnyFunction;
  };
  desktopCapture: {
    getDesktopCaptureSources: DefaultTypes.AnyFunction;
  };
  features: {
    declareSupported: DefaultTypes.AnyFunction;
    supports: DefaultTypes.AnyFunction;
  };
  fileManager: {
    basename: DefaultTypes.AnyFunction;
    cleanupTempFiles: DefaultTypes.AnyFunction;
    dirname: DefaultTypes.AnyFunction;
    extname: DefaultTypes.AnyFunction;
    getModuleDataPathSync: DefaultTypes.AnyFunction;
    getModulePath: DefaultTypes.AnyFunction;
    join: DefaultTypes.AnyFunction;
    openFiles: DefaultTypes.AnyFunction;
    readLogFiles: DefaultTypes.AnyFunction;
    readTimeSeriesLogFiles: DefaultTypes.AnyFunction;
    saveWithDialog: DefaultTypes.AnyFunction;
    showItemInFolder: DefaultTypes.AnyFunction;
    showOpenDialog: DefaultTypes.AnyFunction;
  };
  gpuSettings: {
    getEnableHardwareAcceleration: DefaultTypes.AnyFunction;
    setEnableHardwareAcceleration: DefaultTypes.AnyFunction;
  };
  http: {
    getAPIEndpoint: DefaultTypes.AnyFunction;
    makeChunkedRequest: DefaultTypes.AnyFunction;
  };
  ipc: {
    invoke: DefaultTypes.AnyFunction;
    on: DefaultTypes.AnyFunction;
    send: DefaultTypes.AnyFunction;
  };
  isRenderer: boolean;
  nativeModules: {
    canBootstrapNewUpdater: boolean;
    ensureModule: DefaultTypes.AnyFunction;
    requireModule: DefaultTypes.AnyFunction;
  };
  os: {
    arch: string;
    release: string;
  };
  powerMonitor: {
    getSystemIdleTimeMs: DefaultTypes.AnyFunction;
    on: DefaultTypes.AnyFunction;
    removeAllListeners: DefaultTypes.AnyFunction;
    removeListener: DefaultTypes.AnyFunction;
  };
  powerSaveBlocker: {
    blockDisplaySleep: DefaultTypes.AnyFunction;
    cleanupDisplaySleep: DefaultTypes.AnyFunction;
    unblockDisplaySleep: DefaultTypes.AnyFunction;
  };
  process: {
    arch: string;
    env: object;
    platform: string;
  };
  processUtils: {
    flushCookies: DefaultTypes.AnyFunction;
    flushDNSCache: DefaultTypes.AnyFunction;
    flushStorageData: DefaultTypes.AnyFunction;
    getCPUCoreCount: DefaultTypes.AnyFunction;
    getCurrentCPUUsagePercent: DefaultTypes.AnyFunction;
    getCurrentMemoryUsageKB: DefaultTypes.AnyFunction;
    getLastCrash: DefaultTypes.AnyFunction;
    getMainArgvSync: DefaultTypes.AnyFunction;
    purgeMemory: DefaultTypes.AnyFunction;
  };
  remoteApp: {
    dock: {
      setBadge: DefaultTypes.AnyFunction;
      bounce: DefaultTypes.AnyFunction;
      cancelBounce: DefaultTypes.AnyFunction;
    };
    getBuildNumber: DefaultTypes.AnyFunction;
    getDefaultDoubleClickAction: DefaultTypes.AnyFunction;
    getModuleVersions: DefaultTypes.AnyFunction;
    getPath: DefaultTypes.AnyFunction;
    getReleaseChannel: DefaultTypes.AnyFunction;
    getVersion: DefaultTypes.AnyFunction;
    registerUserInteractionHandler: DefaultTypes.AnyFunction;
    relaunch: DefaultTypes.AnyFunction;
    setBadgeCount: DefaultTypes.AnyFunction;
  };
  remotePowerMonitor: {
    getSystemIdleTimeMs: DefaultTypes.AnyFunction;
    on: DefaultTypes.AnyFunction;
    removeAllListeners: DefaultTypes.AnyFunction;
    removeListener: DefaultTypes.AnyFunction;
  };
  safeStorage: {
    decryptString: DefaultTypes.AnyFunction;
    encryptString: DefaultTypes.AnyFunction;
    isEncryptionAvailable: DefaultTypes.AnyFunction;
  };
  setUncaughtExceptionHandler: DefaultTypes.AnyFunction;
  settings: {
    get: DefaultTypes.AnyFunction;
    getSync: DefaultTypes.AnyFunction;
    set: DefaultTypes.AnyFunction;
  };
  spellCheck: {
    getAvailableDictionaries: DefaultTypes.AnyFunction;
    on: DefaultTypes.AnyFunction;
    removeListener: DefaultTypes.AnyFunction;
    replaceMisspelling: DefaultTypes.AnyFunction;
    setLearnedWords: DefaultTypes.AnyFunction;
    setLocale: DefaultTypes.AnyFunction;
  };
  thumbar: { setThumbarButtons: DefaultTypes.AnyFunction };
  userDataCache: {
    cacheUserData: DefaultTypes.AnyFunction;
    deleteCache: DefaultTypes.AnyFunction;
    getCached: DefaultTypes.AnyFunction;
  };
  window: {
    USE_OSX_NATIVE_TRAFFIC_LIGHTS: boolean;
    blur: DefaultTypes.AnyFunction;
    close: DefaultTypes.AnyFunction;
    flashFrame: DefaultTypes.AnyFunction;
    focus: DefaultTypes.AnyFunction;
    fullscreen: DefaultTypes.AnyFunction;
    isAlwaysOnTop: DefaultTypes.AnyFunction;
    maximize: DefaultTypes.AnyFunction;
    minimize: DefaultTypes.AnyFunction;
    restore: DefaultTypes.AnyFunction;
    setAlwaysOnTop: DefaultTypes.AnyFunction;
    setBackgroundThrottling: DefaultTypes.AnyFunction;
    setDevtoolsCallbacks: DefaultTypes.AnyFunction;
    setProgressBar: DefaultTypes.AnyFunction;
    setZoomFactor: DefaultTypes.AnyFunction;
  };
}
export interface Settings {
  BulkActionsdelay: number;
  voicechatcopyids: boolean;
  voicechatcopymentions: boolean;
  exceptSelf: boolean;
  fastMove: boolean;
}
