/* eslint-disable react-memo/require-memo */
/* eslint-disable react-memo/require-usememo */
import {Dialog, Transition} from '@headlessui/react';
import {Fragment} from 'react';

import {PortfolioItem} from '../../data/dataDef';
import {useTranslation} from '../../hooks/useTranslation';

interface ProjectModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  project: PortfolioItem;
}

const ProjectModal: React.FC<ProjectModalProps> = ({isOpen, setIsOpen, project}) => {
  const closeModal = () => {
    setIsOpen(false);
  };
  const {t} = useTranslation();
  const fullDescriptionStrs = t(project.fullDescription).split('\n');
  const achievementsStrs = t(project.achievements).split('\n');


  return (
    <Transition appear as={Fragment} show={isOpen}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-30" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  {t(project.title)}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    {t(project.role)} · {t(project.duration)}
                  </p>
                  {/* <p className="text-sm text-gray-500">
                    Duration: {project.duration}
                  </p> */}
                  <br />
                  <p className="text-sm text-gray-500">
                    {fullDescriptionStrs.map((str, index) => {
                      if(str === '[newline]') {return <br key={`space-${str}-${index}`} />}
                      return (
                        <p key={`${str}-${index}`}>
                          {str}
                        </p>
                        )
                    })}
                  </p>
                  <br />
                  <p className="text-sm text-gray-500">
                    {achievementsStrs.map((str, index) => {
                      if(str === '[newline]') {
                        return <br key={`${str}-${index}`} />
                      }
                      return (
                        <p key={`${str}-${index}`}>
                          {str}
                        </p>
                        )
                    })}
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                    type="button"
                  >
                    {t('projects.close')}
                  </button>
                  {project.url && (
                    <a
                      className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 ml-2"
                      href={project.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {t('projects.visit')}
                    </a>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProjectModal;
