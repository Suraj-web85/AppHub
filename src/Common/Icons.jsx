import {
  MdModeEditOutline,
  MdArrowBackIosNew,
  MdLogout,
  MdPerson,
  MdPeopleAlt,
  MdAdminPanelSettings,
  MdPersonAdd,
  MdAppRegistration,
} from "react-icons/md";

import {
  PiNoteLight,
  PiNotePencilLight,
  PiXLight,
  PiDotsThreeOutlineVerticalFill,
} from "react-icons/pi";

import { IoGridOutline } from "react-icons/io5";

const Icons = {
  pencil: <MdModeEditOutline className="sh" />,
  exit: <MdLogout className="sh" />,
  backarrow: <MdArrowBackIosNew />,
  person: <MdPerson />,
  close: <PiXLight />,
  threedots: <PiDotsThreeOutlineVerticalFill />,
  paperpencil: <PiNotePencilLight />,
  persons: <MdPeopleAlt />,
  superuser: <MdAdminPanelSettings />,
  apprequest: <MdAppRegistration />,
  personplus: <MdPersonAdd />,
  upload: <IoGridOutline />,
};

export default Icons;
