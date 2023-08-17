import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Search,
  SquareStack,
  Users,
} from 'lucide-react'
import { Logo } from './Logo'
import { Navitem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import * as Input from '../Input'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control />
      </Input.Root>

      <nav className="space-y-0.5">
        <Navitem title="Home" icon={Home} />
        <Navitem title="Dashboard" icon={BarChart} />
        <Navitem title="Projects" icon={SquareStack} />
        <Navitem title="Tasks" icon={CheckSquare} />
        <Navitem title="Reporting" icon={Flag} />
        <Navitem title="Users" icon={Users} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <Navitem title="Support" icon={LifeBuoy} />
          <Navitem title="Settings" icon={Cog} />
        </nav>

        <UsedSpaceWidget />

        <Profile />
      </div>
    </aside>
  )
}
