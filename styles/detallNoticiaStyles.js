import { StyleSheet } from "react-native";
import theme from "./theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.beixClar,
  },
  content: {
    paddingHorizontal: theme.spacing.md,
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.lg,
  },
  imatge: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: theme.spacing.md,
  },
  titol: {
    ...theme.typography.title,
    fontSize: 24,
    marginBottom: theme.spacing.sm,
  },
  data: {
    ...theme.typography.small,
    color: theme.colors.negre,
    marginBottom: theme.spacing.xs,
  },
  text: {
    ...theme.typography.body,
    fontSize: 16,
    marginTop: theme.spacing.sm,
  },
});
