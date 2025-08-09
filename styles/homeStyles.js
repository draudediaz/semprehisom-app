import { StyleSheet } from "react-native";
import theme from "./theme";

export default StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    padding: theme.spacing.lg,
  },
  title: {
    fontSize: 36,
    fontWeight: "900",
    color: theme.colors.negre,
    textTransform: "uppercase",
    textAlign: "center",
    marginTop: theme.spacing.lg,
    marginBottom: theme.spacing.sm,
    letterSpacing: -1,
  },
  subtitle: {
    ...theme.typography.subtitle,
    textAlign: "center",
    marginBottom: theme.spacing.xl,
  },
  buttonGroup: {
    marginTop: theme.spacing.lg,
    gap: theme.spacing.sm,
  },
  titleWrapper: {
    alignItems: "center",
    marginBottom: theme.spacing.sm,
  },
  titleSmall: {
    fontSize: 28,
    fontWeight: "900",
    color: theme.colors.negre,
    textTransform: "uppercase",
    textAlign: "center",
    letterSpacing: -1,
    lineHeight: 32,
  },
  titleBig: {
    fontSize: 40,
    fontWeight: "900",
    color: theme.colors.negre,
    textTransform: "uppercase",
    textAlign: "center",
    letterSpacing: -2,
    lineHeight: 44,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: theme.colors.negre,
    marginBottom: theme.spacing.sm,
    marginTop: theme.spacing.lg,
  },
});
