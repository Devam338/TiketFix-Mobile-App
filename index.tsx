import {
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_600SemiBold,
  Raleway_700Bold,
  useFonts,
} from "@expo-google-fonts/raleway";
import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

// Theme
const C = {
  text:        "#2D4263",
  bg:          "#E0EAFF",
  white:       "#FFFFFF",
  cardHL:      "#DDFFE3",
  divider:     "#6D6D6D",
  blue:        "#2B6CB8",
  teal:        "#52B69A",
  green:       "#67D97C",
  orange:      "#FFC470",
  red:         "#F00",
};

const F = {
  regular:  "Raleway_400Regular",
  medium:   "Raleway_500Medium",
  semiBold: "Raleway_600SemiBold",
  bold:     "Raleway_700Bold",
};

// Icons 
function BellIcon() {
  return (
    <Svg width="45" height="45" viewBox="0 0 45 45" fill="none">
      <Circle cx="22.5" cy="22.5" r="22.5" fill="#A6CCF6" />
      <Path
        d="M19.8542 14.8018L19.3825 14.4222C19.2557 14.3207 19.1534 14.192 19.083 14.0456C19.0126 13.8992 18.976 13.7389 18.9759 13.5765V9.19573C18.9753 7.31314 18.3215 5.48908 17.1262 4.03469C15.9308 2.58029 14.2679 1.58565 12.4211 1.22043C12.331 0.871166 12.1274 0.561739 11.8423 0.340815C11.5572 0.11989 11.2068 0 10.8461 0C10.4854 0 10.1349 0.11989 9.84983 0.340815C9.56472 0.561739 9.36114 0.871166 9.27109 1.22043C7.42326 1.58455 5.7591 2.57871 4.56267 4.03321C3.36624 5.48771 2.71172 7.31238 2.71084 9.19573V13.5765C2.71074 13.7389 2.67415 13.8992 2.60377 14.0456C2.53339 14.192 2.43102 14.3207 2.30422 14.4222L1.83253 14.8018C1.26286 15.2572 0.802535 15.8345 0.485403 16.4913C0.168271 17.1481 0.00240375 17.8676 0 18.5969V19.4969C0 20.0721 0.228485 20.6237 0.63519 21.0304C1.0419 21.4371 1.59351 21.6656 2.16867 21.6656H6.64699C6.8914 22.5914 7.43531 23.4104 8.1939 23.9947C8.95249 24.579 9.88312 24.8959 10.8407 24.8959C11.7982 24.8959 12.7288 24.579 13.4874 23.9947C14.246 23.4104 14.7899 22.5914 15.0343 21.6656H19.5181C20.0932 21.6656 20.6449 21.4371 21.0516 21.0304C21.4583 20.6237 21.6867 20.0721 21.6867 19.4969V18.6078C21.686 17.8766 21.5209 17.155 21.2037 16.4962C20.8865 15.8374 20.4253 15.2583 19.8542 14.8018ZM10.8434 22.7499C10.4649 22.7477 10.0936 22.6464 9.76644 22.4562C9.43925 22.2659 9.16754 21.9934 8.97831 21.6656H12.7139C12.5242 21.9942 12.2516 22.2672 11.9234 22.4575C11.5952 22.6478 11.2228 22.7486 10.8434 22.7499ZM19.5181 19.4969H2.16867V18.6078C2.16925 18.2015 2.26116 17.8005 2.43759 17.4345C2.61401 17.0685 2.87046 16.7469 3.18795 16.4933L3.65964 16.1138C4.04004 15.8092 4.34715 15.4231 4.55829 14.9839C4.76944 14.5448 4.87921 14.0638 4.87952 13.5765V9.19573C4.87952 7.61402 5.50785 6.09709 6.62629 4.97865C7.74473 3.86021 9.26166 3.23188 10.8434 3.23188C12.4251 3.23188 13.942 3.86021 15.0605 4.97865C16.1789 6.09709 16.8072 7.61402 16.8072 9.19573V13.5765C16.8067 14.0647 16.9161 14.5467 17.1273 14.9869C17.3385 15.4271 17.646 15.8141 18.0271 16.1192L18.4988 16.4987C18.8156 16.7517 19.0716 17.0725 19.248 17.4375C19.4244 17.8025 19.5167 18.2024 19.5181 18.6078V19.4969Z"
        fill="white"
        transform="translate(11.5, 10)"
      />
    </Svg>
  );
}

function SearchIcon() {
  return (
    <Svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <Path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#333" />
    </Svg>
  );
}

function PeopleIcon({ color }: { color: string }) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path d="M9 9C9 7.3 10.3 6 12 6C13.7 6 15 7.3 15 9C15 10.7 13.7 12 12 12C10.3 12 9 10.7 9 9ZM12 14C7.4 14 6 17.3 6 17.3V19H18V17.3C18 17.3 16.6 14 12 14Z" fill={color} />
      <Path d="M18.5 11C19.8807 11 21 9.88071 21 8.5C21 7.11929 19.8807 6 18.5 6C17.1193 6 16 7.11929 16 8.5C16 9.88071 17.1193 11 18.5 11Z" fill={color} />
      <Path d="M18.5 13C17.3 13 16.4 13.3 15.7 13.8C18 14.9 18.9 16.8 18.9 17V17.1H23V15.8C23 15.7 21.9 13 18.5 13Z" fill={color} />
      <Path d="M5.5 11C6.88071 11 8 9.88071 8 8.5C8 7.11929 6.88071 6 5.5 6C4.11929 6 3 7.11929 3 8.5C3 9.88071 4.11929 11 5.5 11Z" fill={color} />
      <Path d="M5.5 13C6.7 13 7.6 13.3 8.3 13.8C6 14.9 5.1 16.8 5.1 17V17.1H1V15.8C1 15.7 2.1 13 5.5 13Z" fill={color} />
    </Svg>
  );
}

// Tab Icons
function HomeTabIcon({ active }: { active: boolean }) {
  return (
    <Svg width="26" height="24" viewBox="0 0 39 35" fill="none">
      <Path
        d="M20.3057 2.63281C21.52 3.67924 23.2073 5.13256 25.1006 6.75879C28.8864 10.0105 33.499 13.9587 36.7939 16.7344L36.8047 16.7432L36.8164 16.752C37.0065 16.9047 37.083 17.079 37.083 17.25C37.083 17.6195 36.7864 17.9168 36.417 17.917H31.333V32.583C31.333 32.9525 31.0364 33.2498 30.667 33.25H24.917C24.5482 33.25 24.25 32.9515 24.25 32.583V23.667H14.083V32.583C14.083 32.9514 13.7856 33.2498 13.417 33.25H7.66699C7.29743 33.25 7 32.9526 7 32.583V17.917H1.91699C1.54743 17.917 1.25 17.6196 1.25 17.25C1.25 17.0706 1.33563 16.8768 1.5166 16.71C4.83357 13.9346 9.44293 10.0014 13.2236 6.75977C15.1206 5.13327 16.8108 3.67936 18.0264 2.63281C18.4756 2.24601 18.8598 1.91434 19.166 1.65039C19.4721 1.91439 19.8566 2.24586 20.3057 2.63281Z"
        fill={active ? C.blue : "white"}
        stroke={active ? C.blue : "#A6CCF6"}
        strokeWidth="2.5"
      />
    </Svg>
  );
}

function MessagesTabIcon({ active }: { active: boolean }) {
  return (
    <Svg width="26" height="24" viewBox="0 0 31 29" fill="none">
      <Path d="M1.1875 28.5015C1.03173 28.5055 0.877182 28.473 0.73625 28.4065C0.51939 28.3174 0.333752 28.1661 0.202731 27.9717C0.0717105 27.7773 0.00117026 27.5484 0 27.314V5.67775C0.0169622 4.91512 0.184018 4.16331 0.491622 3.46526C0.799227 2.76722 1.24135 2.13662 1.79274 1.60949C2.34413 1.08236 2.99397 0.669042 3.70514 0.393138C4.41632 0.117234 5.17488 -0.0158461 5.9375 0.00150196H24.9375C25.7001 -0.0158461 26.4587 0.117234 27.1699 0.393138C27.881 0.669042 28.5309 1.08236 29.0823 1.60949C29.6336 2.13662 30.0758 2.76722 30.3834 3.46526C30.691 4.16331 30.858 4.91512 30.875 5.67775V16.8878C30.858 17.6504 30.691 18.4022 30.3834 19.1002C30.0758 19.7983 29.6336 20.4289 29.0823 20.956C28.5309 21.4831 27.881 21.8965 27.1699 22.1724C26.4587 22.4483 25.7001 22.5814 24.9375 22.564H7.61187L2.03063 28.1571C1.91966 28.2672 1.78807 28.3543 1.64339 28.4134C1.49871 28.4725 1.34378 28.5024 1.1875 28.5015ZM5.9375 2.3765C5.02798 2.34436 4.14271 2.67356 3.47517 3.29215C2.80763 3.91074 2.41209 4.76842 2.375 5.67775V24.4521L6.28188 20.5334C6.39284 20.4233 6.52443 20.3362 6.66911 20.2771C6.81379 20.2181 6.96872 20.1881 7.125 20.189H24.9375C25.847 20.2211 26.7323 19.8919 27.3998 19.2734C28.0674 18.6548 28.4629 17.7971 28.5 16.8878V5.67775C28.4629 4.76842 28.0674 3.91074 27.3998 3.29215C26.7323 2.67356 25.847 2.34436 24.9375 2.3765H5.9375Z" fill={active ? C.blue : "#A6CCF6"} />
      <Path d="M15.4375 13.0641C16.4213 13.0641 17.2188 12.2666 17.2188 11.2828C17.2188 10.2991 16.4213 9.50159 15.4375 9.50159C14.4538 9.50159 13.6563 10.2991 13.6563 11.2828C13.6563 12.2666 14.4538 13.0641 15.4375 13.0641Z" fill={active ? C.blue : "#A6CCF6"} />
      <Path d="M21.9688 13.0641C22.9526 13.0641 23.7501 12.2666 23.7501 11.2828C23.7501 10.2991 22.9526 9.50159 21.9688 9.50159C20.985 9.50159 20.1876 10.2991 20.1876 11.2828C20.1876 12.2666 20.985 13.0641 21.9688 13.0641Z" fill={active ? C.blue : "#A6CCF6"} />
      <Path d="M8.90627 13.0641C9.89002 13.0641 10.6875 12.2666 10.6875 11.2828C10.6875 10.2991 9.89002 9.50159 8.90627 9.50159C7.92251 9.50159 7.12502 10.2991 7.12502 11.2828C7.12502 12.2666 7.92251 13.0641 8.90627 13.0641Z" fill={active ? C.blue : "#A6CCF6"} />
    </Svg>
  );
}

function CasesTabIcon({ active }: { active: boolean }) {
  return (
    <Image
      source={require("../../assets/suitcase.png")}
      style={{ width: 26, height: 26, tintColor: active ? C.blue : "#A6CCF6" }}
      resizeMode="contain"
    />
  );
}

function CalendarTabIcon({ active }: { active: boolean }) {
  return (
    <Svg width="26" height="22" viewBox="0 0 35 29" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.9565 29H3.04348C1.36272 29 0 27.6332 0 25.9474V3.05263C0 1.36682 1.36272 0 3.04348 0H31.9565C33.6373 0 35 1.36682 35 3.05263V25.9474C35 27.6332 33.6373 29 31.9565 29ZM33.4783 3.05263C33.4783 2.21011 32.7965 1.52632 31.9565 1.52632H3.04348C2.20348 1.52632 1.52174 2.21011 1.52174 3.05263V7.63158H33.4783V3.05263ZM33.4783 9.1579H1.52174V25.9474C1.52174 26.7899 2.20348 27.4737 3.04348 27.4737H31.9565C32.7965 27.4737 33.4783 26.7899 33.4783 25.9474V9.1579ZM30.4348 19.8421H28.913C28.493 19.8421 28.1522 19.501 28.1522 19.0789V17.5526C28.1522 17.1314 28.493 16.7895 28.913 16.7895H30.4348C30.8555 16.7895 31.1957 17.1314 31.1957 17.5526V19.0789C31.1957 19.501 30.8555 19.8421 30.4348 19.8421ZM30.4348 14.5H28.913C28.493 14.5 28.1522 14.1589 28.1522 13.7368V12.2105C28.1522 11.7885 28.493 11.4474 28.913 11.4474H30.4348C30.8555 11.4474 31.1957 11.7885 31.1957 12.2105V13.7368C31.1957 14.1589 30.8555 14.5 30.4348 14.5ZM24.3478 19.8421H22.8261C22.4061 19.8421 22.0652 19.501 22.0652 19.0789V17.5526C22.0652 17.1314 22.4061 16.7895 22.8261 16.7895H24.3478C24.7686 16.7895 25.1087 17.1314 25.1087 17.5526V19.0789C25.1087 19.501 24.7686 19.8421 24.3478 19.8421ZM24.3478 14.5H22.8261C22.4061 14.5 22.0652 14.1589 22.0652 13.7368V12.2105C22.0652 11.7885 22.4061 11.4474 22.8261 11.4474H24.3478C24.7686 11.4474 25.1087 11.7885 25.1087 12.2105V13.7368C25.1087 14.1589 24.7686 14.5 24.3478 14.5ZM18.2609 19.8421H16.7391C16.3184 19.8421 15.9783 19.501 15.9783 19.0789V17.5526C15.9783 17.1314 16.3184 16.7895 16.7391 16.7895H18.2609C18.6816 16.7895 19.0217 17.1314 19.0217 17.5526V19.0789C19.0217 19.501 18.6816 19.8421 18.2609 19.8421ZM18.2609 14.5H16.7391C16.3184 14.5 15.9783 14.1589 15.9783 13.7368V12.2105C15.9783 11.7885 16.3184 11.4474 16.7391 11.4474H18.2609C18.6816 11.4474 19.0217 11.7885 19.0217 12.2105V13.7368C19.0217 14.1589 18.6816 14.5 18.2609 14.5ZM12.1739 25.1842H10.6522C10.2314 25.1842 9.8913 24.8431 9.8913 24.4211V22.8947C9.8913 22.4727 10.2314 22.1316 10.6522 22.1316H12.1739C12.5947 22.1316 12.9348 22.4727 12.9348 22.8947V24.4211C12.9348 24.8431 12.5947 25.1842 12.1739 25.1842ZM12.1739 19.8421H10.6522C10.2314 19.8421 9.8913 19.501 9.8913 19.0789V17.5526C9.8913 17.1314 10.2314 16.7895 10.6522 16.7895H12.1739C12.5947 16.7895 12.9348 17.1314 12.9348 17.5526V19.0789C12.9348 19.501 12.5947 19.8421 12.1739 19.8421ZM12.1739 14.5H10.6522C10.2314 14.5 9.8913 14.1589 9.8913 13.7368V12.2105C9.8913 11.7885 10.2314 11.4474 10.6522 11.4474H12.1739C12.5947 11.4474 12.9348 11.7885 12.9348 12.2105V13.7368C12.9348 14.1589 12.5947 14.5 12.1739 14.5ZM6.08696 25.1842H4.56522C4.14446 25.1842 3.80435 24.8431 3.80435 24.4211V22.8947C3.80435 22.4727 4.14446 22.1316 4.56522 22.1316H6.08696C6.50772 22.1316 6.84783 22.4727 6.84783 22.8947V24.4211C6.84783 24.8431 6.50772 25.1842 6.08696 25.1842ZM6.08696 19.8421H4.56522C4.14446 19.8421 3.80435 19.501 3.80435 19.0789V17.5526C3.80435 17.1314 4.14446 16.7895 4.56522 16.7895H6.08696C6.50772 16.7895 6.84783 17.1314 6.84783 17.5526V19.0789C6.84783 19.501 6.50772 19.8421 6.08696 19.8421ZM16.7391 22.1316H18.2609C18.6816 22.1316 19.0217 22.4727 19.0217 22.8947V24.4211C19.0217 24.8431 18.6816 25.1842 18.2609 25.1842H16.7391C16.3184 25.1842 15.9783 24.8431 15.9783 24.4211V22.8947C15.9783 22.4727 16.3184 22.1316 16.7391 22.1316Z"
        fill={active ? C.blue : "#A6CCF6"}
      />
    </Svg>
  );
}

function UserTabIcon({ active }: { active: boolean }) {
  return (
    <Svg width="29" height="29" viewBox="0 0 29 29" fill="none">
      <Circle cx="14.5" cy="14.5" r="14.5" fill={active ? C.blue : "#D9D9D9"} />
      <Path d="M9.52891 11.4162C12.156 11.4162 14.2857 8.8606 14.2857 5.7081C14.2857 2.5556 12.156 0 9.52891 0C6.90182 0 4.77216 2.5556 4.77216 5.7081C4.77216 8.8606 6.90182 11.4162 9.52891 11.4162Z" fill="white" transform="translate(4.97, 3)" />
      <Path d="M18.8518 16.2682C17.9956 14.5557 16.3783 13.1287 14.2853 12.2725C13.7145 12.0822 13.0486 12.0822 12.5729 12.3676C11.6215 12.9384 10.6702 13.2238 9.52857 13.2238C8.38695 13.2238 7.4356 12.9384 6.48425 12.3676C6.00858 12.1774 5.34263 12.0822 4.77182 12.3676C2.67885 13.2238 1.06156 14.6509 0.205341 16.3633C-0.460604 17.6001 0.585881 19.0271 2.01291 19.0271H17.0442C18.4713 19.0271 19.5177 17.6001 18.8518 16.2682Z" fill="white" transform="translate(4.97, 3)" />
    </Svg>
  );
}

// Data
type Status = "select_lawyer" | "new" | "in_progress" | "resolved" | "cancelled";

interface CaseItem {
  id: string;
  name: string;
  caseId: string;
  location: string;
  date: string;
  status: Status;
  highlight: boolean;
}

const CASES: CaseItem[] = [
  { id: "1", name: "Peter Smith",   caseId: "222222222", location: "Ontario, Canada", date: "January 1st, 2025", status: "select_lawyer", highlight: false },
  { id: "2", name: "Peter Smith",   caseId: "111222333", location: "Ontario, Canada", date: "January 1st, 2025", status: "select_lawyer", highlight: true  },
  { id: "3", name: "Jane Smith",    caseId: "222333444", location: "Ontario, Canada", date: "January 1st, 2025", status: "new",           highlight: false },
  { id: "4", name: "Joe Smith",     caseId: "123456789", location: "Ontario, Canada", date: "January 1st, 2025", status: "in_progress",   highlight: false },
  { id: "5", name: "Julian Smith",  caseId: "111222111", location: "Ontario, Canada", date: "January 1st, 2025", status: "resolved",      highlight: false },
  { id: "6", name: "Juliana Smith", caseId: "111222111", location: "Ontario, Canada", date: "January 1st, 2025", status: "cancelled",     highlight: false },
];

type SortKey = "az" | "date" | "status";

const STATUS_CFG: Record<Status, { label: string; color: string; dot: boolean; people: boolean }> = {
  select_lawyer: { label: "Select Lawyer", color: C.teal,   dot: false, people: true  },
  new:           { label: "New",           color: C.green,  dot: true,  people: false },
  in_progress:   { label: "In Progress",   color: C.orange, dot: true,  people: false },
  resolved:      { label: "Resolved",      color: C.teal,   dot: false, people: false },
  cancelled:     { label: "Cancelled",     color: C.red,    dot: true,  people: false },
};

// Screen
export default function CasesScreen() {
  const [fontsLoaded] = useFonts({ Raleway_400Regular, Raleway_500Medium, Raleway_600SemiBold, Raleway_700Bold });
  const [search,    setSearch]    = useState("");
  const [sort,      setSort]      = useState<SortKey>("az");
  const [activeTab, setActiveTab] = useState("cases");

  if (!fontsLoaded) {
    return (
      <SafeAreaView style={[s.root, { alignItems: "center", justifyContent: "center" }]}>
        <ActivityIndicator size="large" color={C.blue} />
      </SafeAreaView>
    );
  }

  const filtered = CASES.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) || c.caseId.includes(search)
  );

  const tabs = [
    { key: "home",     label: "Home",     Icon: HomeTabIcon     },
    { key: "messages", label: "Messages", Icon: MessagesTabIcon },
    { key: "cases",    label: "My Cases", Icon: CasesTabIcon    },
    { key: "calendar", label: "Calendar", Icon: CalendarTabIcon },
    { key: "user",     label: "User",     Icon: UserTabIcon     },
  ];

  return (
    <SafeAreaView style={s.root}>
      <StatusBar barStyle="dark-content" backgroundColor={C.bg} />

      {/* Top Bar */}
      <View style={s.topBar}>
        <Image source={require("../../assets/logo.png")} style={{ width: 72, height: 56 }} resizeMode="contain" />
        <View style={s.bellCircle}>
          <BellIcon />
        </View>
      </View>

      {/* Search */}
      <View style={s.searchWrap}>
        <View style={s.searchBox}>
          <TextInput
            style={s.searchInput}
            placeholder="Search..."
            placeholderTextColor="rgba(0, 0, 0, 0.40)"
            value={search}
            onChangeText={setSearch}
          />
          <SearchIcon />
        </View>
      </View>

      {/* Sort Pills */}
      <View style={s.pillRow}>
        <Pressable onPress={() => setSort("az")} style={s.pillAZ}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path d="M2 17L5.75 7H7.9L11.65 17H9.6L8.75 14.6H4.9L4.1 17H2ZM5.5 12.9H8.1L6.9 9.15H6.75L5.5 12.9ZM13.7 17V15.1L18.75 8.8H13.9V7H20.95V8.9L15.95 15.2H21V17H13.7ZM9 5L12 2L15 5H9ZM12 22L9 19H15L12 22Z" fill={C.white} />
          </Svg>
        </Pressable>
        <Pressable onPress={() => setSort("date")} style={[s.pill, s.pillDate]}>
          <Text style={s.pillTxt}>Date</Text>
        </Pressable>
        <Pressable onPress={() => setSort("status")} style={[s.pill, s.pillStatus]}>
          <Text style={s.pillTxt}>Status</Text>
        </Pressable>
      </View>

      {/* Cases List */}
      <ScrollView contentContainerStyle={s.list} showsVerticalScrollIndicator indicatorStyle="black">
        {filtered.map((item) => {
          const cfg = STATUS_CFG[item.status];
          return (
            <Pressable
              key={item.id}
              style={({ pressed }) => [s.card, item.highlight && s.cardHL, pressed && { opacity: 0.85 }]}
            >
              <View style={s.cardHead}>
                <Text style={s.cardName}>{item.name}</Text>
                <View style={s.statusWrap}>
                  {cfg.people && <PeopleIcon color={cfg.color} />}
                  {cfg.dot    && <View style={[s.dot, { backgroundColor: cfg.color }]} />}
                  <Text style={[s.statusLabel, { color: cfg.color }]}>{cfg.label}</Text>
                </View>
              </View>

              <View style={s.divider} />

              <View style={s.cardBody}>
                <Text style={s.bodyRow}>{"Case ID: "}<Text style={s.bodyBold}>{item.caseId}</Text></Text>
                <Text style={s.bodyRow}>{"Location: "}<Text style={s.bodyBold}>{item.location}</Text></Text>
                <Text style={s.bodyRow}>{"Date Created: "}<Text style={s.bodyBold}>{item.date}</Text></Text>
              </View>
            </Pressable>
          );
        })}
        <View style={{ height: 20 }} />
      </ScrollView>

      {/* Tab Bar */}
      <View style={s.tabBar}>
        {tabs.map(({ key, label, Icon }) => {
          const active = activeTab === key;
          return (
            <Pressable key={key} style={[s.tabItem, active && s.tabItemActive]} onPress={() => setActiveTab(key)}>
              <View style={s.tabIconWrap}>
                <Icon active={active} />
              </View>
              <Text style={[s.tabLabel, active && s.tabLabelActive]}>{label}</Text>
              {active && <View style={s.tabUnderline} />}
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

// Styles
const s = StyleSheet.create({
  root:         { flex: 1, backgroundColor: C.bg },

  // Top bar
  topBar:       { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, paddingTop: 8, paddingBottom: 12 },
  bellCircle:   { width: 45, height: 45, alignItems: "center", justifyContent: "center" },

  // Search
  searchWrap:   { paddingHorizontal: 18, marginBottom: 16 },
  searchBox:    { flexDirection: "row", alignItems: "center", backgroundColor: "#FFF", borderRadius: 15, paddingHorizontal: 20, paddingVertical: 13, borderWidth: 1, borderColor: "#E4E4E4", shadowColor: "#000", shadowOpacity: 0.05, shadowRadius: 4, shadowOffset: { width: 0, height: 4 }, elevation: 2 },
  searchInput:  { flex: 1, fontFamily: F.semiBold, fontSize: 16, color: C.text, letterSpacing: 1.6, paddingVertical: 0 },

  // Sort pills
  pillRow:      { flexDirection: "row", paddingHorizontal: 18, gap: 10, marginBottom: 18 },
  pillAZ:       { width: 42, height: 24, borderRadius: 15, backgroundColor: "#6889CC", alignItems: "center", justifyContent: "center" },
  pill:         { alignItems: "center", justifyContent: "center", borderRadius: 15, backgroundColor: "#FFF", borderWidth: 1, borderColor: "#FFF" },
  pillDate:     { width: 62, height: 24 },
  pillStatus:   { width: 80, height: 24 },
  pillTxt:      { fontFamily: F.semiBold, fontSize: 16, color: "#6889CC", letterSpacing: 1.6 },

  // Cases list
  list:         { paddingHorizontal: 18, gap: 14 },

  // Card
  card:         { backgroundColor: "#FFF", borderRadius: 20, paddingHorizontal: 18, paddingTop: 15, paddingBottom: 18, borderWidth: 1, borderColor: "#D9DADD" },
  cardHL:       { backgroundColor: C.cardHL },
  cardHead:     { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
  cardName:     { fontFamily: F.medium, fontSize: 16, color: "#2D4263", letterSpacing: 1.6 },
  statusWrap:   { flexDirection: "row", alignItems: "center", gap: 5 },
  dot:          { width: 10, height: 10, borderRadius: 5 },
  statusLabel:  { fontFamily: F.semiBold, fontSize: 14, letterSpacing: 1.4 },
  divider:      { height: 1, backgroundColor: C.divider, marginBottom: 10 },
  cardBody:     { gap: 6 },
  bodyRow:      { fontFamily: F.regular, fontSize: 12, color: "#6D6D6D", letterSpacing: 1.2 },
  bodyBold:     { fontFamily: F.bold, fontSize: 12, color: "#6D6D6D", letterSpacing: 1.2 },

  // Tab bar
  tabBar:         { flexDirection: "row", backgroundColor: C.white, borderTopWidth: 1, borderTopColor: "#C8DCE8", paddingTop: 10, paddingBottom: 6, alignItems: "center" },
  tabItem:        { flex: 1, alignItems: "center", justifyContent: "center", gap: 3, paddingVertical: 4 },
  tabItemActive:  { backgroundColor: "#D6E8FA", borderRadius: 12, paddingHorizontal: 10 },
  tabIconWrap:    { width: 30, height: 30, alignItems: "center", justifyContent: "center" },
  tabLabel:       { fontFamily: F.semiBold, fontSize: 10, color: "#46649C", letterSpacing: 1 },
  tabLabelActive: { fontFamily: F.semiBold, color: "#46649C" },
  tabUnderline:   { position: "absolute", bottom: -6, width: 40, height: 3, backgroundColor: C.blue, borderRadius: 2 },
});