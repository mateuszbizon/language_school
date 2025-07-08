import z from "zod";

export const courseSchema = z.object({
    option: z.enum(["option-single", "option-pair", "option-group"], {
        required_error: "Wybierz jedną z opcji"
    }),
    englishLevel: z.string({
        required_error: "Wybierz jedną z opcji"
    }),
    learnDay: z.string({
        required_error: "Wybierz jedną z opcji"
    }),
    name: z.string().min(1, "Pole nie może być puste"),
    phoneNumber: z.string().min(1, "Pole nie może być puste"),
    days: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "Wybierz przynajmniej jedną wartość",
    }),
})

export type CourseSchema = z.infer<typeof courseSchema>