'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
// import { Loading } from '@repo/ui'
// import type { FormEvent } from 'react'
// import { useState } from 'react'
// import type { Company } from 'admin-types'
// import type { Locale } from '@i18n/types'
// import { useGetMultipleCompanies } from '@requests/company'

// type Props = {
//     locale: Locale
// }

export function CompanySearchForm() {
    // { locale }: Props
    // const [inputValue, setInputValue] = useState('')
    // const [data, setData] = useState<Company[] | null>(null)
    // const { loading, error, call } = useGetMultipleCompanies({
    //     loadOnInit: false,
    //     variables: {
    //         limit: 5,
    //         locale,
    //         page: 1,
    //         where: { name: { contains: inputValue } },
    //     },
    // })

    // async function onSubmit(event: FormEvent<HTMLFormElement>) {
    //     event.preventDefault()
    //     const response = await call()
    //     console.log(response)
    //     if (response?.data.docs) {
    //         setData(response.Comapanies.docs)
    //     }
    // }

    return (
        <div className="w-full">
            <form
                className="flex justify-center w-[80%] mb-10"
                // onSubmit={onSubmit}
            >
                <label
                    className={`flex items-center gap-2 input input-bordered input-ghost bg-transparent min-w-[200px] max-w-[500px] w-full `}
                >
                    {/* {loading ? ( 
                         <Loading size="sm" variant="ring" />
                    ) : ( */}
                    <MagnifyingGlassIcon className="h-8 w-8 opacity-70 z-[-1]" />
                    {/*  )} */}
                    <input
                        id="memberSearchField"
                        name="memberSearchField"
                        // onChange={(e) => {
                        //     setInputValue(e.target.value)
                        // }}
                        placeholder="Search..."
                        type="text"
                    />
                </label>
            </form>
        </div>
    )
}
