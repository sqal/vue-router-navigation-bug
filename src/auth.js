let authenticated = false;

const wait = ms => new Promise((resolve) => setTimeout(resolve, ms))

export const auth = {
  async login(shouldAuthenticate = true) {
    await wait(500);
    authenticated = shouldAuthenticate
  },
  isAuthenticated() {
    return authenticated;
  }
}
