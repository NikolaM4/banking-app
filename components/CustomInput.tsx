import React from 'react'

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { Control } from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'

const CustomInput = ({
  control,
  name,
  label,
  placeholder,
}: {
  control: Control<z.infer<typeof authFormSchema>>
  name: 'email' | 'password'
  label: string
  placeholder: string
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input placeholder={placeholder} className="input-class" type="password" {...field} />
            </FormControl>
            <FormMessage className="form-message mt-2"></FormMessage>
          </div>
        </div>
      )}
    />
  )
}

export default CustomInput