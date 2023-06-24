export interface BaseInputInterface {
  label: { type: String , default: "" },
  inputType: string | undefined,
  placeholder: string,
  input: string,
  error: boolean,
  success: boolean
}