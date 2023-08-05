/* eslint-disable no-unused-vars */
export type Role = 'user' | 'admin'

export const ROLES = ['user', 'admin']

export const USER_SEARCHABLE_FIELDS = ['name', 'address', 'phoneNumber']

export const USER_FILTERABLE_FIELDS = [
  'phoneNumber',
  'name',
  'address',
];