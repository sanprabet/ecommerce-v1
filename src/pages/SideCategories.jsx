import React, { useState, useContext } from "react"

// Contexts
import { categoriesSlideOpenContext, dimensionsContext } from "../components/Shared/Contexts"

// Components
import SideBarContainer from "../components/Shared/SideBarContainer";
import SearchMenu from "../components/Shared/SearchMenu"

export default function SideSearch() {
  const { categorySlideOpen, setCategorySlideOpen } = useContext(categoriesSlideOpenContext);
  
  return (
    <SideBarContainer setIsVisible={setCategorySlideOpen} isVisible={categorySlideOpen}  isOnTheRight={false}>
      categories
    </SideBarContainer>
  )
}
