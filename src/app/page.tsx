import { List } from '@/components/List/List'
import { AddUserBtn, Main, MainHeader, SectionHead } from '@/styles/SMain'
import Link from 'next/link'

export default function Home() {
  return (
    <Main>
        <SectionHead>
            <MainHeader>User list</MainHeader>
            <AddUserBtn>
                <Link href="/adduserform">Add User</Link>
            </AddUserBtn>
        </SectionHead>
        <List />
    </Main>
  )
}
