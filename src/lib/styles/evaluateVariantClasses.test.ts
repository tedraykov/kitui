import evaluateVariantClasses from '$lib/styles/evaluateVariantClasses';
import type { ButtonProps, ButtonStyles, Variants } from '$lib';

it("should get styles for primary filled button", () => {
	const props: ButtonProps = {
		element: "button",
		type: "filled",
		color: "primary",
        size: "medium"
	};

	const variants: Variants<ButtonProps, ButtonStyles> = [
		{
			props: {},
			styles: {
                root: "h-fit w-fit rounded-lg py-2 px-4"
            }
		},
		{
			props: { type: "outlined" },
            styles: {
                root: "border transition-colors font active:bg-gray-100/70"
            }
		},
		{
			props: { type: "outlined", color: "primary" },
            styles: {
                root: "text-primary border-outlinei shadow-sm shadow-primary-200/50 hover:border-primary-500"
            }
		},
		{
			props: {type: "filled"},
			styles: {
                root: "text-white hover:opacity-90 transition-opacity"
            }
		},
		{
			props: {type: "filled", color: "primary"},
			styles: {
                root: "bg-gradient-to-b from-primary-30 to-primary shadow-md shadow-primary-200/50 active:from-primary-600 active:to-primary-700"
            }
		},
		{
			props: {type: "filled", color: "secondary"},
			styles: {
                root: "bg-gradient-to-b from-secondary-30 to-secondary-40 shadow-md shadow-secondary-200/50 active:from-secondary-600 active:to-secondary-700"
            }
		}
	]

	const evaluatedVariantClasses = evaluateVariantClasses(props, variants)
    
	expect(evaluatedVariantClasses).toMatchSnapshot();
});
