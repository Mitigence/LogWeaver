# Utility functions for common tasks

def convert_to_json(data):
    try:
        return json.loads(data)
    except ValueError as e:
        logging.error(f"Error converting to JSON: {e}")
        return None
