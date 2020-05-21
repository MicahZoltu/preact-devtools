import { h, ComponentChildren, Fragment } from "preact";

const sizes: Record<string, string> = {
	xs: ".8rem",
	s: "1rem",
	m: "2rem",
	l: "4rem",
};

export type Size = keyof typeof sizes;

export interface Props {
	size?: Size;
}

export function createSvgIcon(size: Size, children: ComponentChildren) {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			style={`width: ${sizes[size]}; height: ${sizes[size]}`}
		>
			{children}
		</svg>
	);
}

export function Undo({ size = "s" }: Props) {
	return createSvgIcon(
		size,
		<path
			d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"
			fill="currentColor"
		/>,
	);
}

export function Eye({ size = "s" }: Props) {
	return createSvgIcon(
		size,
		<path
			d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
			fill="currentColor"
		/>,
	);
}

export function AddCircle({ size = "s" }: Props) {
	return createSvgIcon(
		size,
		<g>
			<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor" />
			<path d="M0 0h24v24H0z" fill="none" />
		</g>,
	);
}

export function SettingsIcon({ size = "s" }: Props) {
	return createSvgIcon(
		size,
		<path
			d="M19.14 12.936c.036-.3.06-.612.06-.936s-.024-.636-.072-.936l2.028-1.584a.496.496 0 0 0 .12-.612l-1.92-3.324c-.12-.216-.372-.288-.588-.216l-2.388.96a7.03 7.03 0 0 0-1.62-.936l-.36-2.544a.479.479 0 0 0-.48-.408h-3.84a.467.467 0 0 0-.468.408l-.36 2.544a7.219 7.219 0 0 0-1.62.936l-2.388-.96a.475.475 0 0 0-.588.216l-1.92 3.324a.465.465 0 0 0 .12.612l2.028 1.584c-.048.3-.084.624-.084.936s.024.636.072.936L2.844 14.52a.496.496 0 0 0-.12.612l1.92 3.324c.12.216.372.288.588.216l2.388-.96a7.03 7.03 0 0 0 1.62.936l.36 2.544c.048.24.24.408.48.408h3.84c.24 0 .444-.168.468-.408l.36-2.544a7.219 7.219 0 0 0 1.62-.936l2.388.96c.216.084.468 0 .588-.216l1.92-3.324a.465.465 0 0 0-.12-.612l-2.004-1.584zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
			fill="currentColor"
		/>,
	);
}

export function BugIcon({ size = "s" }: Props) {
	return createSvgIcon(
		size,
		<path
			d="M20 8h-2.81a5.985 5.985 0 0 0-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"
			fill="currentColor"
		/>,
	);
}

export function InspectNativeIcon({ size = "s" }: Props) {
	return createSvgIcon(
		size,
		<Fragment>
			<path d="M0 0h24v24H0z" fill="none" />
			<path
				d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
				fill="currentColor"
			/>
		</Fragment>,
	);
}

export function Remove({ size = "s" }: Props) {
	return createSvgIcon(
		size,
		<g>
			<path
				d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
				fill="currentColor"
			/>
			<path d="M0 0h24v24H0z" fill="none" />
		</g>,
	);
}

export function Refresh({ size = "s" }: Props) {
	return createSvgIcon(
		size,
		<path
			d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
			fill="currentColor"
		/>,
	);
}

export function Picker() {
	return (
		<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
			<g fill="none" fill-rule="evenodd">
				<g stroke="currentColor">
					<path
						stroke-width=".291"
						fill="currentColor"
						fill-rule="nonzero"
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M6 6l3.014 9 2.508-3.533L15 8.791z"
					/>
					<path stroke-width="2" d="M10.417 10.417l2.87 2.87L15 15" />
				</g>
				<path
					d="M12.188 0A2.812 2.812 0 0 1 15 2.813V5h-1V2.857A1.857 1.857 0 0 0 12.143 1H2.857A1.857 1.857 0 0 0 1 2.857v9.286C1 13.169 1.831 14 2.857 14H5v1H2.812A2.812 2.812 0 0 1 0 12.187V2.813A2.812 2.812 0 0 1 2.813 0h9.374z"
					fill="currentColor"
					fill-rule="nonzero"
				/>
			</g>
		</svg>
	);
}

export function KeyboardDown({ size = "s" }: Props) {
	return createSvgIcon(
		size,
		<path
			d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
			fill="currentColor"
		/>,
	);
}

export function KeyboardUp({ size = "s" }: Props) {
	return createSvgIcon(
		size,
		<path
			d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"
			fill="currentColor"
		/>,
	);
}

export function Close({ size = "s" }: Props) {
	return createSvgIcon(
		size,
		<path
			d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
			fill="currentColor"
		/>,
	);
}

export function Search({ size = "s" }: Props) {
	return createSvgIcon(
		size,
		<path
			d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
			fill="currentColor"
		/>,
	);
}

export function FilterList({ size = "s" }: Props) {
	return createSvgIcon(
		size,
		<path
			d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"
			fill="currentColor"
		/>,
	);
}

export function CheckboxChecked({ size = "s" }: Props) {
	return createSvgIcon(
		size,
		<path
			d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
			fill="currentColor"
		/>,
	);
}

export function CheckboxUnChecked({ size = "s" }: Props) {
	return createSvgIcon(
		size,
		<Fragment>
			<path
				d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
				fill="currentColor"
			/>
			<path d="M0 0h24v24H0z" fill="none" />
		</Fragment>,
	);
}

export function FileCopy({ size = "s" }: Props) {
	return createSvgIcon(
		size,
		<path
			d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"
			fill="currentColor"
		/>,
	);
}

export function ArrowBack({ size = "s" }: Props) {
	return createSvgIcon(
		size,
		<g>
			<path d="M0 0h24v24H0z" fill="none" />
			<path
				d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
				fill="currentColor"
			/>
		</g>,
	);
}
export function ArrowForward({ size = "s" }: Props) {
	return createSvgIcon(
		size,
		<g>
			<path d="M0 0h24v24H0z" fill="none" />
			<path
				d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
				fill="currentColor"
			/>
		</g>,
	);
}

export function RecordIcon({ size = "s" }: Props) {
	return createSvgIcon(
		size,
		<circle fill="currentColor" cx="12" cy="12" r="8" />,
	);
}

export function NotInterested({ size = "s" }: Props) {
	return createSvgIcon(
		size,
		<path
			d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"
			fill="currentColor"
		/>,
	);
}

export function SortIcon({ size = "s" }: Props) {
	return createSvgIcon(
		size,
		<Fragment>
			<path
				d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"
				fill="currentColor"
			/>
			<path d="M0 0h24v24H0z" fill="none" />
		</Fragment>,
	);
}

export function FireIcon({ size = "s" }: Props) {
	return createSvgIcon(
		size,
		<Fragment>
			<path
				d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"
				fill="currentColor"
			/>
			<path d="M0 0h24v24H0z" fill="none" />
		</Fragment>,
	);
}
