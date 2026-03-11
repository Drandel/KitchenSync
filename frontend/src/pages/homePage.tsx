import { Fragment } from "react";
import { useNavigate, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import GroupIcon from "@mui/icons-material/Group";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { SubmitButton } from "../styles/authForms";
import * as Sx from "../styles/homeStyles";
import chickenTacosImg from "../assets/recipe-spicy-chicken-tacos.webp";
import steakVeggiesImg from "../assets/recipe-grilled-steak-veggies.webp";
import pestoPastaImg from "../assets/recipe-creamy-pesto-pasta.webp";
import capresesaladImg from "../assets/recipe-caprese-salad.webp";

// ── Recipe card data ──────────────────────────────────────────────────────────
const FEATURED_RECIPES = [
  { title: "Spicy Chicken Tacos", image: chickenTacosImg },
  { title: "Grilled Steak & Veggies", image: steakVeggiesImg },
  { title: "Creamy Pesto Pasta", image: pestoPastaImg },
  { title: "Caprese Salad", image: capresesaladImg },
];

// ── Feature data ──────────────────────────────────────────────────────────────
const FEATURES = [
  {
    Icon: BookmarkAddIcon,
    title: "Save Favorite Recipes",
    description:
      "Snap a photo of a finished dish and store it along with the recipe details for easy reference and recall.",
  },
  {
    Icon: GroupIcon,
    title: "Share Your Meals",
    description:
      "Create groups with family and friends to share your recipe collections and discover new dishes together, no matter where you are.",
  },
  {
    Icon: ShoppingCartIcon,
    title: "Create Shopping Lists",
    description:
      "Select your favorite recipes and automatically generate a shopping list from the ingredients for stress-free grocery runs.",
  },
] as const;

// ── Component ─────────────────────────────────────────────────────────────────

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {/* ── Hero ──────────────────────────────────────────── */}
      <Box sx={Sx.heroSectionSx}>
        <Typography component="h1" sx={Sx.heroAppNameSx}>
          KitchenSync
        </Typography>

        <Typography component="h2" sx={Sx.heroHeadlineSx}>
          A Recipe Hub for People Who Love To Cook
        </Typography>

        <Typography sx={Sx.heroBodySx}>
          A shared recipe box built for home cooks who want one place to save
          and share tried-and-true recipes with family and friends.
        </Typography>

        <SubmitButton
          variant="contained"
          size="large"
          onClick={() => navigate("/signup")}
          sx={Sx.heroCTAButtonSx}
        >
          Get Started
        </SubmitButton>

        <Typography sx={Sx.heroFreeNoteSx}>
          Start saving your recipes today, it&apos;s{" "}
          <Box component="span" fontWeight={700}>
            free.
          </Box>
        </Typography>
      </Box>

      {/* ── Featured Recipes (Cork Band) ──────────────────── */}
      <Box sx={Sx.corkBandWrapperSx}>
        <Box sx={Sx.corkSashSx} />
        <Box sx={Sx.recipeGridSx}>
          {FEATURED_RECIPES.map((recipe) => (
            <Box
              key={recipe.title}
              component={Link}
              to="/recipes"
              sx={{ ...Sx.recipeCardSx, textDecoration: "none" }}
            >
              <Box
                component="img"
                src={recipe.image}
                alt={recipe.title}
                loading="lazy"
                sx={Sx.recipeCardImageAreaSx}
              />
              <Typography sx={Sx.recipeCardLabelSx}>{recipe.title}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── Features ──────────────────────────────────────── */}
      <Box sx={Sx.featuresSectionSx}>
        <Box sx={Sx.featuresRowSx}>
          {FEATURES.map(({ Icon, title, description }, index) => (
            <Fragment key={title}>
              {index > 0 && <Box sx={Sx.featureDividerSx} />}
              <Box sx={Sx.featureColumnSx}>
                <Icon sx={Sx.featureIconSx} />
                <Typography sx={Sx.featureTitleSx}>{title}</Typography>
                <Typography sx={Sx.featureDescSx}>{description}</Typography>
              </Box>
            </Fragment>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
