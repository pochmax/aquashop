import type {
  EditWindsurfBoardById,
  UpdateWindsurfBoardInput,
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

type FormWindsurfBoard = NonNullable<EditWindsurfBoardById['windsurfBoard']>

interface WindsurfBoardFormProps {
  windsurfBoard?: EditWindsurfBoardById['windsurfBoard']
  onSave: (data: UpdateWindsurfBoardInput, id?: FormWindsurfBoard['id']) => void
  error: RWGqlError
  loading: boolean
}

const WindsurfBoardForm = (props: WindsurfBoardFormProps) => {
  const onSubmit = (data: FormWindsurfBoard) => {
    props.onSave(data, props?.windsurfBoard?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormWindsurfBoard> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.windsurfBoard?.brand}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="brand" className="rw-field-error" />

        <Label
          name="fins"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Fins
        </Label>

        <NumberField
          name="fins"
          defaultValue={props.windsurfBoard?.fins}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="fins" className="rw-field-error" />

        <Label
          name="type"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Type
        </Label>

        <TextField
          name="type"
          defaultValue={props.windsurfBoard?.type}
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
          defaultValue={props.windsurfBoard?.model}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="model" className="rw-field-error" />

        <Label
          name="volume"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Volume
        </Label>

        <NumberField
          name="volume"
          defaultValue={props.windsurfBoard?.volume}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="volume" className="rw-field-error" />

        <Label
          name="imageUrl"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image url
        </Label>

        <TextField
          name="imageUrl"
          defaultValue={props.windsurfBoard?.imageUrl}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="imageUrl" className="rw-field-error" />

        <Label
          name="sails"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Sails
        </Label>

        <TextField
          name="sails"
          defaultValue={props.windsurfBoard?.sails}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="sails" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default WindsurfBoardForm
