import type {
  EditWindsurfSailById,
  UpdateWindsurfSailInput,
} from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

type FormWindsurfSail = NonNullable<EditWindsurfSailById['windsurfSail']>

interface WindsurfSailFormProps {
  windsurfSail?: EditWindsurfSailById['windsurfSail']
  onSave: (data: UpdateWindsurfSailInput, id?: FormWindsurfSail['id']) => void
  error: RWGqlError
  loading: boolean
}

const WindsurfSailForm = (props: WindsurfSailFormProps) => {
  const onSubmit = (data: FormWindsurfSail) => {
    props.onSave(data, props?.windsurfSail?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormWindsurfSail> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="brand"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Brand
        </Label>

        <TextField
          name="brand"
          defaultValue={props.windsurfSail?.brand}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="brand" className="rw-field-error" />

        <Label
          name="size"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Size
        </Label>

        <TextField
          name="size"
          defaultValue={props.windsurfSail?.size}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="size" className="rw-field-error" />

        <Label
          name="type"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Type
        </Label>

        <TextField
          name="type"
          defaultValue={props.windsurfSail?.type}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="type" className="rw-field-error" />

        <Label
          name="model"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Model
        </Label>

        <TextField
          name="model"
          defaultValue={props.windsurfSail?.model}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="model" className="rw-field-error" />

        <Label
          name="cumber"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Cumber
        </Label>

        <NumberField
          name="cumber"
          defaultValue={props.windsurfSail?.cumber}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="cumber" className="rw-field-error" />

        <Label
          name="mastSize"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Mast size
        </Label>

        <TextField
          name="mastSize"
          defaultValue={props.windsurfSail?.mastSize}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="mastSize" className="rw-field-error" />

        <Label
          name="wishSize"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Wish size
        </Label>

        <TextField
          name="wishSize"
          defaultValue={props.windsurfSail?.wishSize}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="wishSize" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default WindsurfSailForm
