'use client'
import { useEffect, useRef } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import type { Logo } from 'admin-types'
import { XCircleIcon } from '@heroicons/react/24/outline'
import { Links } from './links'
import type { HeaderProps } from './types'

export function MobileHeader({ data, locale }: Omit<HeaderProps, 'slug'>) {
    const topDrawerRef = useRef<HTMLDivElement>(null)
    const openDrawerRef = useRef<HTMLButtonElement>(null)
    const closeDrawerRef = useRef<HTMLButtonElement>(null)

    function openDrawer() {
        if (topDrawerRef.current && closeDrawerRef.current) {
            topDrawerRef.current.classList.remove('-translate-y-full')
            closeDrawerRef.current.classList.add('-bottom-5')
        }
    }

    function closeDrawer() {
        if (topDrawerRef.current && closeDrawerRef.current) {
            topDrawerRef.current.classList.add('-translate-y-full')
            closeDrawerRef.current.classList.remove('-bottom-5')
        }
    }

    useEffect(() => {
        function closeDrawerOnClickAway(e: MouseEvent) {
            if (topDrawerRef.current && openDrawerRef.current) {
                if (
                    !openDrawerRef.current.contains(e.target as Node) &&
                    !topDrawerRef.current.contains(e.target as Node)
                ) {
                    closeDrawer()
                }
            }
        }

        document.addEventListener('click', closeDrawerOnClickAway)

        return () => {
            document.removeEventListener('click', closeDrawerOnClickAway)
        }
    }, [])

    return (
        <nav className="navbar md:hidden">
            <div className="navbar-start">
                <button onClick={openDrawer} ref={openDrawerRef} type="button">
                    <Bars3Icon className="h-10 w-10" />
                </button>
                <div
                    className="flex items-center flex-col bg-blue-900 fixed inset-x-0 top-0 h-fit  shadow-lg transform -translate-y-full transition-transform ease-in-out duration-300"
                    id="topDrawer"
                    ref={topDrawerRef}
                >
                    <div className="flex items-center py-4 px-6">
                        {data.logo.image ? (
                            <Image
                                alt="logo"
                                className="mb-2"
                                height={(data.logo.image as Logo).height || 0}
                                src={`${
                                    process.env.NEXT_PUBLIC_PAYLOAD_ENDPOINT
                                }${(data.logo.image as Logo).url}`}
                                width={(data.logo.image as Logo).width || 0}
                            />
                        ) : null}
                    </div>
                    <div className="w-full py-4 px-6 text-center text-lg">
                        <ul className="flex flex-col items-center list-none pl-0">
                            <Links data={data} isMobile locale={locale} />
                        </ul>
                    </div>
                    <button
                        className="absolute"
                        onClick={closeDrawer}
                        ref={closeDrawerRef}
                        type="button"
                    >
                        <XCircleIcon className="h-10 w-10" />
                    </button>
                </div>
            </div>
        </nav>
    )
}
