import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <span className={styles.description}>
          <p>
             Goal Buddy
          </p>
          <div>
            <a>
              <Image
                alt="Sunshine Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </span>

        <div className={styles.center}>
          <p> To sign up for daily affirmations to help achieve your goals to be sent to you via text message, all you 
        need to do is:
        <br></br>
        <br></br>
        1. Give us your name and phone number
        <br></br>
        <br></br>
        2. List your top 3 goals
        <br></br>
        <br></br>
        3. Indicate what time of the day you want to receive the text
        <br></br>
        <br></br>
        That's it!
        </p>
        </div>
        <form action = "https://docs.google.com/spreadsheets/d/1HtBHjh6cH0AXkaZb7hH-aGvog5l1oRGYlkZgejYrfrI/edit#gid=0" method = "post"></form>
          <div className={styles.grid}>
            <a
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
              Docs <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
              </p>
            </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
        </form>
      </main>
    </>
  )
}
