# Source Code Organization

This directory contains the organized source code for the personal website.

## Folder Structure

### `/components/`
Contains all React components organized into separate files:

- **`HeroSection.tsx`** - The main hero section with name, title, and social links
- **`PublicationsList.tsx`** - Component for displaying the list of publications
- **`Footer.tsx`** - Footer component with copyright information
- **`GlobalStyles.tsx`** - Global CSS styles component
- **`index.ts`** - Barrel export file for clean imports

### `/types/`
Contains TypeScript type definitions:

- **`index.ts`** - All type definitions including:
  - `Publication` interface
  - `UserData` interface
  - `SocialLink` interface
  - `PublicationsListProps` interface

### `/data/`
Contains static data and configuration:

- **`index.ts`** - All static data including:
  - User information and profile data
  - Social media links configuration
  - Publications data

### `/app/`
Next.js app directory containing:

- **`page.tsx`** - Main page component (now clean and organized)
- **`layout.tsx`** - Root layout component
- **`globals.css`** - Global CSS styles

## Benefits of This Organization

1. **Separation of Concerns**: Each component has its own file
2. **Type Safety**: Centralized type definitions
3. **Data Management**: Static data separated from components
4. **Maintainability**: Easier to find and modify specific functionality
5. **Reusability**: Components can be easily imported and reused
6. **Clean Imports**: Barrel exports provide clean import statements

## Usage

Components can be imported using the barrel export:

```typescript
import { HeroSection, PublicationsList, Footer, GlobalStyles } from "../components";
```

Types can be imported from the types directory:

```typescript
import { Publication, UserData } from "../types";
```

Data can be imported from the data directory:

```typescript
import { userData, actualPublications } from "../data";
``` 