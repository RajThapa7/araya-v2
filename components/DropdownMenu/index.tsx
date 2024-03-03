"use client";

import { ChevronDownIcon, Squares2X2Icon } from "@heroicons/react/24/solid";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
} from "@material-tailwind/react";

export function DropdownMenu() {
  return (
    <Menu allowHover>
      <MenuHandler>
        <Button
          variant="text"
          className="flex items-center gap-3 text-base font-normal capitalize tracking-normal"
        >
          <Squares2X2Icon strokeWidth={2.5} height={20} width={20} />
          Browse by category
        </Button>
      </MenuHandler>
      <MenuList>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <Menu placement="right-start" offset={15}>
          <MenuHandler>
            <MenuItem>Nested Item</MenuItem>
          </MenuHandler>
          <MenuList>
            <MenuItem>Nested Item 1</MenuItem>
            <MenuItem>Nested Item 2</MenuItem>
            <MenuItem>Nested Item 3</MenuItem>
          </MenuList>
        </Menu>
        <MenuItem>Menu Item 3</MenuItem>
      </MenuList>
    </Menu>
  );
}
