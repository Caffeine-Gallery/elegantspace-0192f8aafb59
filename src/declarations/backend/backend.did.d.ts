import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface ContactForm {
  'name' : string,
  'email' : string,
  'message' : string,
}
export interface PortfolioItem {
  'id' : bigint,
  'title' : string,
  'description' : string,
  'imageUrl' : string,
}
export interface Testimonial {
  'id' : bigint,
  'name' : string,
  'text' : string,
  'avatarUrl' : string,
}
export interface _SERVICE {
  'getPortfolioItems' : ActorMethod<[], Array<PortfolioItem>>,
  'getTestimonials' : ActorMethod<[], Array<Testimonial>>,
  'submitContactForm' : ActorMethod<[ContactForm], undefined>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
