import React, { useState, useContext } from "react"

// Components
import NavBarSearch from "../components/NavBar/NavBarSearch";

import { searchSlideOpenContext } from "../components/Shared/Contexts"
import SideBarContainer from "../components/Shared/SideBarContainer";
import SearchMenu from "../components/Shared/SearchMenu";


export default function SideSearch() {
  const { searchSlideOpen, setSearchSlideOpen } = useContext(searchSlideOpenContext);
  return (
    <SideBarContainer setIsVisible={setSearchSlideOpen} isVisible={searchSlideOpen}  isOnTheRight={false}>
      <NavBarSearch />
      <SearchMenu products_per_page={3}/>
    </SideBarContainer>
  )
}


