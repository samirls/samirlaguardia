import { Box } from "@chakra-ui/layout";
import Link from "next/link";

export default function NavItem({ icon, label, path, isSelected }) {
  return (
    <Link href={path}>
      <Box
       display="flex"
       alignItems="center"
       bg={isSelected ? "blue.100" : ""}
       borderRadius="9px"
       height="50px"
       cursor="pointer"
       transition="transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease"
       _hover={{
         transform: "scale(1.05)",
         boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)",
         backgroundColor: isSelected ? "blue.200" : "blue.50",
       }}
      >
        <Box fontSize="1.3rem" display="flex" alignItems="center">
          <Box pr="12px">{icon}</Box>
          <Box>{label}</Box>
        </Box>
      </Box>
    </Link>
  );
}