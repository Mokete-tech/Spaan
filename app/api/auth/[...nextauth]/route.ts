import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error'
  },
  callbacks: {
    session: async ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub
        }
      }
    }
  }
}const handler = NextAuth(authOptions)
  .catch(error => {
    console.error('Auth error:', error)
    throw error
  })export { handler as GET, handler as POST }

{
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/${input:programPath}",
      "preLaunchTask": "npm: build"
    }
  ],
  "inputs": [
    {
      "type": "promptString",
      "id": "programPath",
      "description": "Path to the program file (e.g., app/page.tsx)"
    }
  ],
  "version": "2.0.0",
  "tasks": [
    {
      "type": "npm",
      "script": "build",
      "group": "build",
      "problemMatcher": [],
      "label": "npm: build"
    }
  ]
}

if (!process.env.GITHUB_ID || !process.env.GITHUB_SECRET) {
  throw new Error('Missing GitHub OAuth credentials')
}
