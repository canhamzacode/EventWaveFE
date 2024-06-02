'use client';

import {
  ActionModal,
  CustomApplayout,
  EditEvent,
  EventBanner,
  EventCard,
  EventDescription,
  Success
} from '@/components';
import { eventData } from '@/constants';
import { useModal } from '@/hooks';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { IoChevronBackOutline } from 'react-icons/io5';

const Event = ({ params }: { params: { id: string } }) => {
  const { toggleModal, showModal } = useModal();
  const { showModal: sucessModal } = useModal();
  const { toggleModal: toggleDelete, showModal: deleteModal } = useModal();
  const { toggleModal: editToggle, showModal: editModal } = useModal();

  const router = useRouter();

  const sucessAction = () => {
    router.push('/dashboard');
  };
  useEffect(() => {
    console.log(params.id);
  }, []);

  return (
    <CustomApplayout>
      {showModal && (
        <ActionModal
          toggleModal={toggleModal}
          description="When you cancel your registration, you will no longer be able to attend this event."
          actionName="Cancel"
          undoName="Go Back"
        />
      )}
      {sucessModal && (
        <Success
          ctaAction={sucessAction}
          description="Your event registration has been successfully canceled. If you change your mind, you can always register again."
          title="Registration Cancelled"
          cta="Back to Event Management"
        />
      )}
      {deleteModal && (
        <ActionModal
          toggleModal={toggleDelete}
          description="When you delete this event, it will be permanently removed from the platform."
          actionName="Delete"
          undoName="Go Back"
        />
      )}
      {editModal && <EditEvent toggleModal={editToggle} />}
      <div className="w-full grid gap-6">
        <section className="w-full grid gap-6">
          <div className="w-full flex md:flex-row flex-col md:items-center items-start md:justify-between justify-start gap-5">
            <div className="flex md:items-center items-center gap-4">
              <IoChevronBackOutline size={25} />
              <h3 className="md:text-2xl text-xl font-bold">Tech Innovators Summit</h3>
            </div>
            <div className="sm:flex grid items-center gap-3 md:w-auto w-full">
              <Link
                className="btn flex items-center justify-center gap-2 md:w-[229px] w-full bg-primary text-white font-bold"
                href="/event/[id]/checkout"
                as={`/event/${params.id}/checkout`}
              >
                Register for this event
              </Link>
              <button
                onClick={toggleModal}
                className="btn flex items-center
                 justify-center gap-2 md:w-[229px] w-full bg-primary text-white font-bold"
              >
                Cancel Registration
              </button>
              <button
                onClick={toggleDelete}
                className="btn flex items-center justify-center gap-2 px-4 py-2 md:w-[229px] w-full border-primary text-primary font-bold"
              >
                Delete Event
              </button>
              <button
                onClick={editToggle}
                className="btn flex items-center justify-center gap-2 md:w-[229px] w-full bg-primary text-white font-bold"
              >
                Edit Event
              </button>
            </div>
          </div>
        </section>
        <EventBanner />
        <EventDescription />
        <section className="grid gap-5 mt-4">
          <h3 className="text-2xl font-bold">Similar Events</h3>
          <div className="grid tablet:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {eventData.map((event, index) => (
              <EventCard
                key={index}
                title={event?.title}
                location={event?.location}
                time={event?.time}
                month={event?.month}
                day={event.day}
                status={event?.status}
                paid={event?.paid}
              />
            ))}
          </div>
        </section>
      </div>
    </CustomApplayout>
  );
};

export default Event;
