import type { EditUserById, UpdateUserInput } from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

type FormUser = NonNullable<EditUserById['user']>

interface UserFormProps {
  user?: EditUserById['user']
  onSave: (data: UpdateUserInput, id?: FormUser['id']) => void
  error: RWGqlError
  loading: boolean
}

const UserForm = (props: UserFormProps) => {
  const onSubmit = (data: FormUser) => {
    props.onSave(data, props?.user?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormUser> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="pseudo"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Pseudo
        </Label>

        <TextField
          name="pseudo"
          defaultValue={props.user?.pseudo}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="pseudo" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.user?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="phoneNumber"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Phone number
        </Label>

        <TextField
          name="phoneNumber"
          defaultValue={props.user?.phoneNumber}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="phoneNumber" className="rw-field-error" />

        <Label
          name="avatarUrl"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Avatar url
        </Label>

        <TextField
          name="avatarUrl"
          defaultValue={props.user?.avatarUrl}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="avatarUrl" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserForm
