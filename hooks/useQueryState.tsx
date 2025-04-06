import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useMemo } from 'react';

const useQueryState = (name: string, isNumber?: boolean) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const setValue = useCallback(
    (value: string | number) => {
      const params = new URLSearchParams(searchParams.toString())

      if (value) {
        params.set(name, value.toString())
      } else {
        params.delete(name)
      }

      const stringified = params.toString()
      const newPath = stringified
        ? pathname + '?' + params.toString()
        : pathname

      router.push(newPath, {
        scroll: false
      })
    },
    [name, searchParams]
  )

  const value = useMemo(() => {
    const str = searchParams.get(name)

    if (str && isNumber) {
      return parseInt(str)
    }

    return str
  }, [name, isNumber, searchParams])

  return {
    value,
    setValue
  }
}

export default useQueryState
