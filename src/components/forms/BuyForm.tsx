"use client"

import { courseSchema, CourseSchema } from '@/lib/validations/courseSchema'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Input } from '../ui/input'
import { DAYS } from '@/constants/course'
import { Checkbox } from '../ui/checkbox'

function BuyForm() {
    const form = useForm<CourseSchema>({
        resolver: zodResolver(courseSchema),
        defaultValues: {
            option: undefined,
            englishLevel: undefined,
            learnDay: undefined,
            name: "",
            phoneNumber: "",
            days: []
        }
    })

    function onSubmit(data: CourseSchema) {
        console.log(data)
    }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField 
                control={form.control}
                name='option'
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Wybierz opcję</FormLabel>
                        <FormControl>
                            <RadioGroup 
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex gap-2 flex-wrap"
                            >
                                <FormItem className="flex items-center">
                                    <FormControl>
                                        <RadioGroupItem value="option-single" />
                                    </FormControl>
                                    <FormLabel>Indywidualne</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center">
                                    <FormControl>
                                        <RadioGroupItem value="option-pair" />
                                    </FormControl>
                                    <FormLabel>Para</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center">
                                    <FormControl>
                                        <RadioGroupItem value="option-group" />
                                    </FormControl>
                                    <FormLabel>Grupowe</FormLabel>
                                </FormItem>
                            </RadioGroup>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name='englishLevel'
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Poziom angielskiego</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Poziom angielskiego" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="basic">A1/A2 - podstawowy</SelectItem>
                                <SelectItem value="medium">B1/B2 - średniozaawansowany</SelectItem>
                                <SelectItem value="advanced">C1/C2 - zaawansowany</SelectItem>
                                <SelectItem value="none">Nie znam jeszcze</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name='learnDay'
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Godziny</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Godziny" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="morning">Rano - 08:00-11:00</SelectItem>
                                <SelectItem value="noon">Południe - 11:00-14:00</SelectItem>
                                <SelectItem value="afternoon">Popołudnie - 14:00-17:00</SelectItem>
                                <SelectItem value="evening">Wieczór - 17:00-20:00</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="days"
                render={() => (
                    <FormItem>
                        <FormLabel>Dni tygodnia</FormLabel>
                        {DAYS.map((item) => (
                            <FormField
                            key={item.label}
                            control={form.control}
                            name="days"
                            render={({ field }) => {
                                return (
                                    <FormItem
                                        key={item.label}
                                        className="flex items-center"
                                    >
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value?.includes(item.label)}
                                                onCheckedChange={(checked) => {
                                                return checked
                                                    ? field.onChange([...field.value, item.label])
                                                    : field.onChange(
                                                        field.value?.filter(
                                                        (value) => value !== item.label
                                                        )
                                                    )
                                                }}
                                            />
                                        </FormControl>
                                        <FormLabel>
                                            {item.label}
                                        </FormLabel>
                                    </FormItem>
                                )
                            }}
                            />
                        ))}
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Imię i nazwisko</FormLabel>
                        <FormControl>
                            <Input placeholder='Imię i nazwisko' {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name='phoneNumber'
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Numer telefonu</FormLabel>
                        <FormControl>
                            <Input placeholder='Numer telefonu' {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <Button className='w-full'>
                Zapisuję się
            </Button>
        </form>
    </Form>
  )
}

export default BuyForm