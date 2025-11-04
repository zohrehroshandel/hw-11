export function getStatusColor(status) {
  switch (status) {
  case "done":
    return 'text-green-600';
    case "doing":
      return "text-yellow-500";
      case "todo":
        return "text-red-600";

  default:
    return "text-gray-500"
    
}

}
export function getPriorityColor(priority) {
  switch (priority) {
    case "low":
    return "text-gray-500";
case 'medium':
  return "text-yellow-500";
  case "hight":
    return "text-red-600";
    default:
      return 'text-gray-400';
  }
}
  
