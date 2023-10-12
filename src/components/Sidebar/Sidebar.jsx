import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FiHome, FiMenu, FiBell, FiChevronDown } from "react-icons/fi";
// import authImage from "../images/authImage.jpg"
import authImage from "../../images/authImage.jpg";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { logoutAction } from "../../Actions/userActions";
import { useEffect } from "react";

const LinkItems = [
  { name: "DashBoard", icon: FiHome, link: "/home" },
  { name: "Inventory", icon: InventoryIcon, link: "/inventory-page" },
  { name: "Orders", icon: ShoppingCartIcon, link: "/orders-page" },
  { name: "Users", icon: PeopleAltIcon, link: "/user-management-page" },
  { name: "Requisition", icon: InsertDriveFileIcon, link: "/requisiton-page" },
  { name: "Inward", icon: InsertInvitationIcon, link: "/inward-page" },
];

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
    
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          <div className="flex flex-row">
            <div className="h-5 w-10 m-4">
              {" "}
              <img className="" src={authImage} />
            </div>{" "}
            <span className=" text-5xl font-bold  flex justify-center items-center mt-1">
              VG
            </span>
          </div>
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <Link key={link.link} to={link.link}>
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        </Link>
      ))}
    </Box>
  );
};

const NavItem = ({ icon: IconComponent, children, ...rest }) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#5C59E8",
          color: "white",
        }}
        {...rest}
        
      >
        {IconComponent && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={IconComponent}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const { user } = useSelector((state) => state.user);
  const logoutHandler = async () => {
    await dispatch(logoutAction());
  };
  useEffect(() => {
    if (user === null) {
      navigate("/");
      alert.success("Logged Out");
    }
  }, [navigate, user, alert]);
  return (
    <Flex
     className=""
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar size={"sm"} src={""} />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">{user?.username}</Text>
                  <Text fontSize="xs" color="gray.600">
                    {user?.user_level}
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Add User</MenuItem>
              <MenuDivider />
              <MenuItem onClick={logoutHandler}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

const Sidebar = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4"  className="bg-[#F9F9FC] min-h-screen">
        {children}
      </Box>
    </Box>
  );
};

export default Sidebar;
