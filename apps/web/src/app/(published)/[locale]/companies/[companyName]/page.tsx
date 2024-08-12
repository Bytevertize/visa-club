import Image from 'next/image'
import type { Logo } from 'admin-types'
import { RichTextRenderer } from '@components/rich-text'
import type { Locale } from '@i18n/types'
import { getMultipleCompanies } from '@requests/company'
import type { RootNode } from '@components/rich-text/types'

type Props = {
    params: {
        locale: Locale
        companyName: string
    }
}

export default async function Page({ params: { companyName, locale } }: Props) {
    const {
        Companies: {
            docs: [company],
        },
    } = await getMultipleCompanies({
        locale,
        page: 1,
        limit: 1,
        where: { slug: { equals: companyName } },
    })

    const logo = company.logo as Logo

    return (
        <div className="px-5 w-[80%]">
            <div className="flex flex-col lg:flex-row items-center gap-5 relative lg:h-52">
                <Image
                    alt={logo.alt || 'alt'}
                    className="m-0 relative lg:absolute"
                    height={100}
                    src={`${process.env.NEXT_PUBLIC_CMS_IMAGE_HOSTNAME}${logo.url}`}
                    width={200}
                />
                <h1 className="m-0 mx-auto">{company.name}</h1>
            </div>
            <div className="border-b-2 border-b-blue-100">
                <RichTextRenderer
                    locale={locale}
                    node={company.content?.root as RootNode}
                />
            </div>
            <div className="my-6 flex lg:flex-row flex-col justify-between gap-4">
                <span>
                    <h2 className="my-0 uppercase">
                        {company.contactPerson?.contactPersonName}
                    </h2>
                    <h4 className="my-0">
                        {company.contactPerson?.contactPersonTitle}
                    </h4>
                </span>
                <span className="flex gap-4 flex-col lg:flex-row">
                    {company.contactPerson?.phoneNumber ? (
                        <a href={`tel:${company.contactPerson.phoneNumber}`}>
                            tel: {company.contactPerson.phoneNumber}
                        </a>
                    ) : null}

                    {company.contactPerson?.contactEmail ? (
                        <a
                            href={`mailto:${company.contactPerson.contactEmail}`}
                        >
                            email: {company.contactPerson.contactEmail}
                        </a>
                    ) : null}
                </span>
            </div>
        </div>
    )
}
