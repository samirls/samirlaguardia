import { Box } from "@chakra-ui/layout";
import Link from "next/link";

export default function NavItem({ icon, label, path, isSelected }) {
  return (
    <Link href={path}>
      <Box
        display="flex"
        alignItems="center"
        bg={isSelected ? "blue.100" : ""}
        _hover={{ bg: "blue.100" }}
        borderRadius="9px"
        height="50px"
        cursor="pointer"
      >
        <Box fontSize="1.3rem" display="flex" alignItems="center">
          <Box pr="12px">{icon}</Box>
          <Box>{label}</Box>
        </Box>
      </Box>
    </Link>
  );
}
