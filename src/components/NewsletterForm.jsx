'use client';

import { TextInput } from 'flowbite-react';
import { HiArrowSmRight } from 'react-icons/hi';

export default function NewsletterForm() {

  return (
    <div className="max-w-md">
    <TextInput
      id="email4"
      placeholder="Email"
      rightIcon={HiArrowSmRight}
      type="email"
    />
  </div>
)
}








