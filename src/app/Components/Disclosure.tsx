"use client"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

/*
  * How am i gonna reuse this Disclosure tabs?
  * I need to make just like the CustomButtom.
  * The Span and the Disclosure.Panel need to have some {logi} to be reused.
  * I need to make a new component and pass the props to it.
*/
export default function Example() {
  return (
    <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                <span>Learn more</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                Welcome to "You Are the Hope!" - an NGO dedicated to creating a nurturing and fulfilling 
                environment for elders seeking a quality life in their golden years. Founded with a vision 
                to offer a haven for seniors, our organization is committed to providing a wholesome and 
                engaging atmosphere where residents can enjoy their lives to the fullest.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                <span>Objective</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                The primary objective of "You Are the Hope!" is to establish a compassionate and supportive community 
                for elders. We aim to offer a high standard of care, ensuring their physical, mental, and emotional 
                well-being. 
                Our focus is to create a space where seniors can lead a dignified life filled with joy, purpose, and 
                social interaction.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                <span>Facilities and Services</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                Residential Accommodation: We provide well-designed, comfortable living spaces equipped with modern 
                amenities and safety features to ensure a secure and pleasant environment for our residents.
                Healthcare Services: Our skilled healthcare professionals offer round-the-clock care, 
                regular health check-ups, medication management, and assistance with daily activities to 
                ensure the well-being of our residents.
                Recreational Activities: We organize various engaging activities such as arts and crafts, 
                music therapy, gardening, yoga, and other recreational programs tailored to suit the 
                interests and abilities of our residents.
                Community Engagement: We encourage social interaction through group events, outings, 
                celebrations, and opportunities for volunteering within and outside the facility to help 
                residents stay connected and engaged with the community.
                Counseling and Support: Emotional support and counseling services are available for 
                residents who may require assistance in coping with life changes, providing them with the necessary guidance and encouragement.
                </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                <span>Conclusion</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                At "You Are the Hope!" NGO, we believe that every individual deserves a life of dignity, respect, and 
                joy, especially during their later years. We strive to be the beacon of hope and comfort for seniors, 
                fostering a sense of belonging and purpose within our community.
                Thank you for your interest in our organization. Together, we can make a difference in the lives of our 
                elders and create a world where everyone can age gracefully and happily.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
