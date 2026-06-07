import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID = {
    'seeker_pro': 'price_1Tfity3LdFJq1TM1gXtXAqgS',
    'seeker_premium': 'price_1TfjHH3LdFJq1TM1aGJCSVEu',
    'recruiter_grow': 'price_1TfjHr3LdFJq1TM1F8FF3dbp',
    'recruiter_enter': 'price_1TfjIO3LdFJq1TM1d8JUer1a',
}