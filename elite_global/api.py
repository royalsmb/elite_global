import frappe


@frappe.whitelist(allow_guest=True)
def get_activities():
	"""Return published activities for the website."""
	activities = frappe.get_all(
		"Elite Global Activity",
		filters={"published": 1},
		fields=[
			"name",
			"title",
			"slug",
			"category",
			"date",
			"summary",
			"description",
			"image_1",
			"image_2",
			"tags",
		],
		order_by="date desc",
	)

	for activity in activities:
		activity["tags"] = [
			t.strip() for t in (activity.get("tags") or "").split(",") if t.strip()
		]

	return activities


@frappe.whitelist(allow_guest=True)
def get_testimonials():
	"""Return published testimonials for the website."""
	return frappe.get_all(
		"Elite Global Testimonial",
		filters={"published": 1},
		fields=[
			"full_name",
			"designation",
			"organization",
			"rating",
			"testimonial",
			"image",
		],
		order_by="display_order asc",
	)
