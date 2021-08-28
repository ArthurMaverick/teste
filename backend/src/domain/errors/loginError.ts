/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import { DefaultError } from '../entities/error'

export namespace LoginError {
	export class UserEmailAlreadyExistsError extends DefaultError {
		override readonly name: string;
		override readonly message: string;

		constructor (message: string) {
		  super()
		  this.name = 'UserEmailAlreadyExistsError'
		  this.message = message
		}

		static emailAlreadyExists (): UserEmailAlreadyExistsError {
		  return new UserEmailAlreadyExistsError('UserError: email already exists')
		}
	}
}
