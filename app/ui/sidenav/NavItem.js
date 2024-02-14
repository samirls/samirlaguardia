import { Box } from "@chakra-ui/layout";
import Link from "next/link";
import styles from "./NavItem.module.css";

export default function NavItem({ icon, label, path, isSelected }) {
  return (
    <div className={!isSelected ? styles.hover3 : ""}>
      <Link href={path}>
        <Box
          display="flex"
          alignItems="center"
          bg={isSelected ? "blue.100" : ""}
          borderRadius="9px"
          height="50px"
          cursor="pointer"
          transition="transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease"
          padding='5px'
        >
          <Box fontSize="1.3rem" display="flex" alignItems="center">
            <Box pr="12px">{icon}</Box>
            <Box>{label}</Box>
          </Box>
        </Box>
      </Link>
    </div>
  );
}
