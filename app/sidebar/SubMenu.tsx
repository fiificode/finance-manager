import React from "react";
import Link from "next/link";

//React icons
import { BiSolidDashboard } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdSavings } from "react-icons/md";
import { RiStockFill } from "react-icons/ri";
import { GiNotebook } from "react-icons/gi";
import { TbPresentationAnalytics } from "react-icons/tb";
import { AiFillSetting } from "react-icons/ai";
import { CgLogOut } from "react-icons/cg";
import { RxAvatar } from "react-icons/rx";

// icons
const DashboardIcon = () => (
    <div>
      <BiSolidDashboard size={24} className="min-w-max" />
    </div>
  );

const IncomeIcon = () => (
    <div>
      <GiReceiveMoney size={24} className="min-w-max"/>
    </div>
  );

const ExpenseIcon = () => (
    <div>
      <GiTakeMyMoney size={24} className="min-w-max"/>
    </div>
  );

const SavingsIcon = () => (
    <div>
      <MdSavings size={24} className="min-w-max"/>
    </div>
  );
const InvestmentIcon = () => (
    <div>
      <RiStockFill size={24} className="min-w-max"/>
    </div>
  );

const BudgetIcon = () => (
    <div>
      <GiNotebook size={24} className="min-w-max"/>
    </div>
  );
const ReportIcon = () => (
    <div>
      <TbPresentationAnalytics size={24} className="min-w-max"/>
    </div>
  );



// Side Bar Navigation Items
export const sideNavigationItems= [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: DashboardIcon,
  },
  {
    name: "Incomes",
    href: "/income",
    icon: IncomeIcon,
  },
  {
    name: "Expenses",
    href: "/expense",
    icon: ExpenseIcon,
  },
  {
    name: "Savings",
    href: "/savings",
    icon: SavingsIcon,
    subNavigation: [
      {
        name: "Bank savings",
        href: "/savings/bank",
      },
      {
        name: "Achieve",
        href: "/savings/achieve",
      },
    ],
  },
  {
    name: "Investments",
    href: "/investments",
    icon: InvestmentIcon,
    subNavigation: [
      {
        name: "stocks",
        href: "/investments/stocks",
      },
      {
        name: "crypto",
        href: "/investments/crypto",
      },
    ],
  },
  {
    name: "Budget planner",
    href: "/budget",
    icon: BudgetIcon,
  },
  {
    name: "Analysis",
    href: "/report",
    icon: ReportIcon,
  },
];
