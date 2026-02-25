# Branding Guidelines

This directory contains branding assets for the PortScout Parody Stack demo projects.

## Assets

| File          | Description                                                       |
| ------------- | ----------------------------------------------------------------- |
| `logo.svg`    | Main logo (200x60px) - use in headers and documentation           |
| `badge.svg`   | Compact badge (180x28px) - use in READMEs and small spaces        |
| `footer.html` | Footer snippet with attribution - include in all demo project UIs |

## How to Apply Branding

### 1. Footer Attribution (Required)

Each demo project **must** include the footer attribution in its UI. Copy the contents of `footer.html` into your project's main layout or template.

**For React projects:**

```jsx
// Add to your main layout component
<footer className="portscout-footer">
	<div className="portscout-footer-content">
		<span className="portscout-footer-text">
			Built with{' '}
			<a
				href="https://github.com/superhero-codes/portscout-parody-stack"
				target="_blank"
				rel="noopener noreferrer"
			>
				PortScout Parody Stack
			</a>
			— created for testing{' '}
			<a
				href="https://portscout.app"
				target="_blank"
				rel="noopener noreferrer"
			>
				PortScout
			</a>
		</span>
	</div>
</footer>
```

**For Vue projects:**

```vue
<template>
	<footer class="portscout-footer">
		<div class="portscout-footer-content">
			<span class="portscout-footer-text">
				Built with
				<a
					href="https://github.com/superhero-codes/portscout-parody-stack"
					target="_blank"
					rel="noopener noreferrer"
				>
					PortScout Parody Stack
				</a>
				— created for testing
				<a
					href="https://portscout.app"
					target="_blank"
					rel="noopener noreferrer"
				>
					PortScout
				</a>
			</span>
		</div>
	</footer>
</template>
```

**For plain HTML:**
Simply include the contents of `footer.html` at the bottom of your `<body>` tag.

### 2. Logo Usage

- Use `logo.svg` for project headers and documentation
- Use `badge.svg` for README badges and compact spaces
- Maintain aspect ratio when resizing
- Do not modify colors or styling

### 3. Style Guidelines

The footer styles in `footer.html` are designed to be:

- **Dark mode friendly** - Automatically adapts to light/dark color schemes
- **Subtle and premium** - Uses blur, gradients, and transparency
- **Non-intrusive** - Fixed at bottom, minimal visual weight
- **Accessible** - Sufficient contrast in both modes

### 4. CSS Integration

The recommended CSS is included as a comment in `footer.html`. Key principles:

```css
/* Dark mode (default) */
background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6));
backdrop-filter: blur(8px);
color: rgba(255, 255, 255, 0.7);

/* Light mode (via prefers-color-scheme) */
background: linear-gradient(
	to top,
	rgba(255, 255, 255, 0.95),
	rgba(255, 255, 255, 0.85)
);
color: rgba(0, 0, 0, 0.6);
```

## Attribution Requirement

**Important:** The footer attribution must remain visible in all demo projects. See [ATTRIBUTION.md](../ATTRIBUTION.md) for full details.

## Questions?

Refer to the main [README.md](../README.md) for project overview and attribution requirements.
