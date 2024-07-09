import Image from 'next/image'
import type { Logo } from 'admin-types'
import Link from 'next/link'
import { Links } from './links'
import type { HeaderProps } from './types'
import { ChangeLang } from './change-lang'

export function DesktopHeader({ data, locale, slug }: HeaderProps) {
    return (
        <nav className="navbar h-[10vh] max-h-16 hidden md:flex">
            <div className="navbar-start">
                {(data.logo.image as Logo).url && slug !== 'index' ? (
                    <Link href={`/${locale}`}>
                        <Image
                            alt="logo"
                            className="m-2 h-12 w-1h-12"
                            height={(data.logo.image as Logo).height || 0}
                            src={`${process.env.NEXT_PUBLIC_PAYLOAD_ENDPOINT}${(data.logo.image as Logo).url}`}
                            width={(data.logo.image as Logo).width || 0}
                        />
                    </Link>
                ) : null}
            </div>
            <div className="navbar-center">
                <ul className="menu menu-horizontal px-1">
                    <Links data={data.navItems.items} locale={locale} />
                </ul>
            </div>
            <div className="navbar-end">
                {data.i18n.text ? (
                    <ChangeLang>{data.i18n.text}</ChangeLang>
                ) : null}
            </div>
        </nav>
    )
}
