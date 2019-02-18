'use strict'

const Persona = use("Persona");

class ProfileController {
  async update ({ request, auth, response }) {
    const payload = request.only([
      'email',
      'name',
      'username'
    ]);

    const user = auth.user;

    await Persona.updateProfile(user, payload);

    return response.ok({
      status: 200,
      message: 'Profile updated successfully'
    });
  }
}

module.exports = ProfileController;